import "@/app/globals.css";

import type { Metadata } from "next";
import { Kumbh_Sans as FontSans } from "next/font/google";

import BodyBackground from "@/components/layout-ui/BodyBackground";
import Providers from "@/components/utils/Providers";
import { LAYOUT_METADATA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = LAYOUT_METADATA;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased overflow-hidden",
          fontSans.variable
        )}
      >
        <Providers>
          <BodyBackground />

          {children}
        </Providers>
      </body>
    </html>
  );
}
