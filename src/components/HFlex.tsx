import { cn } from "@/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
  itemsCenter?: boolean;
};

export default function HFlex({ className, children, itemsCenter }: Props) {
  return <div className={cn("flex", className, { "items-center": itemsCenter })}>{children}</div>;
}
