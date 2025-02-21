export const SITE_NAME = "Bridge";
export const SITE_DESCRIPTION = "Tools! Tools! Tools!";
export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://bridge.tinman.llc";
export const GITHUB_REPO_URL = "https://github.com/tinman-group/bridge";

export const SITE_DOMAIN = new URL(SITE_URL).hostname;
export const PASSWORD_RESET_TOKEN_EXPIRATION_SECONDS = 24 * 60 * 60; // 24 hours
export const EMAIL_VERIFICATION_TOKEN_EXPIRATION_SECONDS = 24 * 60 * 60; // 24 hours
export const SESSION_COOKIE_NAME = "session";
export const GOOGLE_OAUTH_STATE_COOKIE_NAME = "google-oauth-state";
export const GOOGLE_OAUTH_CODE_VERIFIER_COOKIE_NAME =
  "google-oauth-code-verifier";
