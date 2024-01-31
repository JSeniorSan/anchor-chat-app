"use client";

import { useLayoutEffect } from "react";
import { useAppSession } from "../session/use-app-session";
import { useRouter } from "next/navigation";

const AuthHoc = (Component: any) => {
  return (props: any) => {
    const session = useAppSession();
    const route = useRouter();
    useLayoutEffect(() => {
      if (session.status === "unauthenticated") {
        route.push("/api/auth/signin");
      }
      console.log("status", session.status);
    }, [session]);

    return <Component {...props} />;
  };
};

export default AuthHoc;
