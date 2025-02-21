"use client";

import { type SignInSchema, signInSchema } from "@/schemas/signin.schema";
import { type ReactNode, useState } from "react";
import { signInAction } from "./sign-in.actions";

import SeparatorWithText from "@/components/separator-with-text";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  generateAuthenticationOptionsAction,
  verifyAuthenticationAction,
} from "@/app/(settings)/settings/security/passkey-settings.actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { startAuthentication } from "@simplewebauthn/browser";
import { KeyIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useServerAction } from "zsa-react";
import SSOButtons from "../_components/sso-buttons";

interface PasskeyAuthenticationButtonProps {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

function PasskeyAuthenticationButton({
  className,
  disabled,
  children,
}: PasskeyAuthenticationButtonProps) {
  const { execute: generateOptions } = useServerAction(
    generateAuthenticationOptionsAction,
    {
      onError: (error) => {
        toast.dismiss();
        toast.error(
          error.err?.message || "Failed to get authentication options",
        );
      },
    },
  );

  const { execute: verifyAuthentication } = useServerAction(
    verifyAuthenticationAction,
    {
      onError: (error) => {
        toast.dismiss();
        toast.error(error.err?.message || "Authentication failed");
      },
      onSuccess: () => {
        toast.dismiss();
        toast.success("Authentication successful");
        window.location.href = "/dashboard";
      },
    },
  );

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleAuthenticate = async () => {
    try {
      setIsAuthenticating(true);
      toast.loading("Authenticating with passkey...");

      // Get authentication options from the server
      const [options] = await generateOptions({});

      if (!options) {
        throw new Error("Failed to get authentication options");
      }

      // Start the authentication process in the browser
      const authenticationResponse = await startAuthentication({
        optionsJSON: options,
      });

      // Send the response back to the server for verification
      await verifyAuthentication({
        response: authenticationResponse,
        challenge: options.challenge,
      });
    } catch (error) {
      console.error("Passkey authentication error:", error);
      toast.dismiss();
      toast.error("Authentication failed");
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <Button
      onClick={handleAuthenticate}
      disabled={isAuthenticating || disabled}
      className={className}
    >
      {isAuthenticating
        ? "Authenticating..."
        : children || "Sign in with a Passkey"}
    </Button>
  );
}

const SignInPage = () => {
  const { execute: signIn } = useServerAction(signInAction, {
    onError: (error) => {
      toast.dismiss();
      toast.error(error.err?.message);
    },
    onStart: () => {
      toast.loading("Signing you in...");
    },
    onSuccess: () => {
      toast.dismiss();
      toast.success("Signed in successfully");
    },
  });
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInSchema) => {
    signIn(data);
  };
  // <div className="min-h-[90vh] flex flex-col items-center px-4 justify-center bg-background my-6 md:my-10 border-red-500 border-2">

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Sign in to your account</CardTitle>
          <CardDescription className="text-center">
            Or{" "}
            <Link
              href="/sign-up"
              className="font-medium text-primary hover:text-primary/90 underline"
            >
              create a new account
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SSOButtons isSignIn />
          <PasskeyAuthenticationButton className="w-full">
            <KeyIcon className="w-5 h-5 mr-2" />
            Sign in with a Passkey
          </PasskeyAuthenticationButton>
          <div className="my-6">
            <SeparatorWithText>
              <span className="uppercase text-muted-foreground">Or</span>
            </SeparatorWithText>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-8 space-y-6"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Email address"
                        type="email"
                        className="w-full px-3 py-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        className="w-full px-3 py-2"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full flex justify-center py-2.5"
              >
                Sign In with Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
