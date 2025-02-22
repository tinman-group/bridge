import { Metadata } from "next";
import { getSessionFromCookie } from "@/utils/auth";
import { redirect } from "next/navigation";
import SignInClientPage from "./sign-in.client";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
};

const SignInPage = async () => {
  const session = await getSessionFromCookie();

  if (session) {
    return redirect('/dashboard');
  }

  return (
    <SignInClientPage />
  )
}

export default SignInPage;
