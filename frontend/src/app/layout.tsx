import type { Metadata } from "next";
import { Viewport } from "next";
import "./globals.scss";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../shared/ui/utils";
import LayoutClient from "@/widgets/side-bar/pub/layout-client";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Core Test App🥶",
  description: "Test project at first",
  icons: "/cube-icon.svg",
};

export const viewport: Viewport = {
  themeColor: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
