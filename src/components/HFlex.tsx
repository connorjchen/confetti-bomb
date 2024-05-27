import { cn } from "@/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function HFlex({ className, children }: Props) {
  return <div className={cn("flex", className)}>{children}</div>;
}
