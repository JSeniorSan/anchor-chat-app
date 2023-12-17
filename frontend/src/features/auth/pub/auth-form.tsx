import SharedForm from "@/features/courses-list/pub/shared-form";
import React from "react";

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  return <SharedForm revalidatePagePath="/" className="w-60 " type={type} />;
};

export default AuthForm;
