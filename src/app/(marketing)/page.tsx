import { SITE_DESCRIPTION, SITE_NAME } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <section className="flex-1 flex flex-col justify-center items-center">
      <h1>PLACEHOLDER</h1>
    </section>
  );
}
