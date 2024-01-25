import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { cn } from "./utils";

export interface IOnlineTag
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const OnlineTag: React.FC<IOnlineTag> = ({ className, ...props }) => {
  return (
    <div
      className={cn("bg-green-500 rounded-full w-3 h-3", className)}
      {...props}
    ></div>
  );
};

export default OnlineTag;
