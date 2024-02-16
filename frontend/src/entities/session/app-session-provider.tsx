"use client";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";
const AppSessionProvider = ({ children }: { children?: React.ReactNode }) => {
  return (
    <NextAuthSessionProvider basePath="/api/auth">
      {children}
    </NextAuthSessionProvider>
  );
};

export default AppSessionProvider;
