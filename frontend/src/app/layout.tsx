import type { Metadata } from "next";
import { Viewport } from "next";
import "./globals.scss";
import { Inter as FontSans } from "next/font/google";
import { cn } from "../shared/ui/utils";
import { ThemeProvider } from "@/features/theme/theme-provider";

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
  const value = true;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          {
            ["flex justify-center items-center"]: !value,
          }
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
