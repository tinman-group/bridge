import { relations, type InferSelectModel } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { createId } from "@paralleldrive/cuid2";

const ROLES_ENUM = {
  ADMIN: "admin",
  USER: "user",
} as const;

const roleTuple = Object.values(ROLES_ENUM) as [string, ...string[]];

const commonColumns = {
  id: text()
    .primaryKey()
    .$defaultFn(() => createId())
    .notNull(),
  createdAt: integer({
    mode: "timestamp",
  })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: integer({
    mode: "timestamp",
  })
    .$onUpdateFn(() => new Date())
    .notNull(),
};

export const userTable = sqliteTable(
  "user",
  {
    ...commonColumns,
    firstName: text({
      length: 255,
    }),
    lastName: text({
      length: 255,
    }),
    email: text({
      length: 255,
    }).unique(),
    passwordHash: text(),
    role: text({
      enum: roleTuple,
    })
      .default(ROLES_ENUM.USER)
      .notNull(),
    emailVerified: integer({
      mode: "timestamp",
    }),
    signUpIpAddress: text({
      length: 100,
    }),
    googleAccountId: text({
      length: 255,
    }),
    /**
     * This can either be an absolute or relative path to an image
     */
    avatar: text({
      length: 600,
    }),
  },
  (table) => [
    index("email_idx").on(table.email),
    index("google_account_id_idx").on(table.googleAccountId),
    index("role_idx").on(table.role),
  ],
);

export const passKeyCredentialTable = sqliteTable(
  "passkey_credential",
  {
    ...commonColumns,
    userId: text()
      .notNull()
      .references(() => userTable.id),
    credentialId: text({
      length: 255,
    })
      .notNull()
      .unique(),
    credentialPublicKey: text({
      length: 255,
    }).notNull(),
    counter: integer().notNull(),
    // Optional array of AuthenticatorTransport as JSON string
    transports: text({
      length: 255,
    }),
    // Authenticator Attestation GUID. We use this to identify the device/authenticator app that created the passkey
    aaguid: text({
      length: 255,
    }),
    // The user agent of the device that created the passkey
    userAgent: text({
      length: 255,
    }),
    // The IP address that created the passkey
    ipAddress: text({
      length: 100,
    }),
  },
  (table) => [
    index("user_id_idx").on(table.userId),
    index("credential_id_idx").on(table.credentialId),
  ],
);

export const userRelations = relations(userTable, ({ many }) => ({
  passkeys: many(passKeyCredentialTable),
}));

export const passKeyCredentialRelations = relations(
  passKeyCredentialTable,
  ({ one }) => ({
    user: one(userTable, {
      fields: [passKeyCredentialTable.userId],
      references: [userTable.id],
    }),
  }),
);

export type User = InferSelectModel<typeof userTable>;
export type PassKeyCredential = InferSelectModel<typeof passKeyCredentialTable>;
