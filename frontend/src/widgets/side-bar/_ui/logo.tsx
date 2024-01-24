import Link from "next/link";
import React from "react";

const Logo = ({ icon }: { icon?: React.ReactNode }) => {
  return <Link href="/">{icon}</Link>;
};

export default Logo;
