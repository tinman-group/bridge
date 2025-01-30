"use server";

import { createServerAction, ZSAError } from "zsa";
import { getDB } from "@/db";
import { userTable } from "@/db/schema";
import { sendPasswordResetEmail } from "@/utils/email";
import { init } from "@paralleldrive/cuid2";
import { eq } from "drizzle-orm";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { getResetTokenKey } from "@/utils/auth-utils";
import { validateTurnstileToken } from "@/utils/validateCaptcha";
import { forgotPasswordSchema } from "@/schemas/forgot-password.schema";
import { getSessionFromCookie } from "@/utils/auth";
import { withRateLimit, RATE_LIMITS } from "@/utils/with-rate-limit";
import { PASSWORD_RESET_TOKEN_EXPIRATION_SECONDS } from "@/constants";
import { isTurnstileEnabled } from "@/flags";

const createId = init({
  length: 32,
});

export const forgotPasswordAction = createServerAction()
  .input(forgotPasswordSchema)
  .handler(async ({ input }) => {
    return withRateLimit(
      async () => {
        if (await isTurnstileEnabled() && input.captchaToken) {
          const success = await validateTurnstileToken(input.captchaToken)

          if (!success) {
            throw new ZSAError(
              "INPUT_PARSE_ERROR",
              "Please complete the captcha"
            )
          }
        }

        const session = await getSessionFromCookie()

        if (!session) {
          throw new ZSAError(
            "NOT_AUTHORIZED",
            "Not authenticated"
          );
        }

        if (!session?.user?.emailVerified) {
          throw new ZSAError(
            "NOT_AUTHORIZED",
            "Email not verified"
          );
        }

        if (session?.user?.email !== input.email) {
          throw new ZSAError(
            "INPUT_PARSE_ERROR",
            "You cannot reset the password for another user"
          );
        }

        const db = await getDB();
        const { env } = await getCloudflareContext();

        try {
          // Find user by email
          const user = await db.query.userTable.findFirst({
            where: eq(userTable.email, input.email.toLowerCase()),
          });

          // Even if user is not found, return success to prevent email enumeration
          if (!user) {
            return { success: true };
          }

          // Generate reset token
          const token = createId();
          const expiresAt = new Date(Date.now() + PASSWORD_RESET_TOKEN_EXPIRATION_SECONDS * 1000);

          // Save reset token in KV with expiration
          await env.NEXT_CACHE_WORKERS_KV.put(
            getResetTokenKey(token),
            JSON.stringify({
              userId: user.id,
              expiresAt: expiresAt.toISOString(),
            }),
            {
              expirationTtl: Math.floor((expiresAt.getTime() - Date.now()) / 1000),
            }
          );

          // Send reset email
          if (user?.email) {
            await sendPasswordResetEmail({
              email: user.email,
              resetToken: token,
              username: user.firstName ?? user.email,
            });
          }

          return { success: true };
        } catch (error) {
          console.error(error)

          if (error instanceof ZSAError) {
            throw error;
          }

          throw new ZSAError(
            "INTERNAL_SERVER_ERROR",
            "An unexpected error occurred"
          );
        }
      },
      RATE_LIMITS.EMAIL
    );
  });
