import { cn } from "@/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function VFlex({ className, children }: Props) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}
