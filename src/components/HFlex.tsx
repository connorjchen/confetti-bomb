import { cn } from "@/utils";
import React from "react";

type Props = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  itemsCenter?: boolean;
};

export default function HFlex({ style, className, children, itemsCenter }: Props) {
  return (
    <div style={style} className={cn("flex", className, { "items-center": itemsCenter })}>
      {children}
    </div>
  );
}
