import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants";
import { Toaster } from "@workspace/ui/components/sonner";
import { ThemeRoot } from "@workspace/ui/components/theme";
import { TooltipProvider } from "@workspace/ui/components/tooltip";
import { Provider as JotaiProvider } from "jotai";
import { PropsWithChildren } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s - ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "SaaS",
    "Next.js",
    "React",
    "TypeScript",
    "Cloudflare Workers",
    "Edge Computing",
  ],
  authors: [{ name: "Lubomir Georgiev" }],
  creator: "Lubomir Georgiev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    creator: "@LubomirGeorg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <JotaiProvider>
          <ThemeRoot>
            <TooltipProvider delayDuration={100} skipDelayDuration={50}>
              {children}
              <Toaster
                richColors
                closeButton
                position="top-right"
                expand
                duration={7000}
              />
            </TooltipProvider>
          </ThemeRoot>
        </JotaiProvider>
      </body>
    </html>
  );
};
