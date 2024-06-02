import { cn } from "@/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  outline?: boolean;
};

export default function Button({ children, onClick, className, outline }: Props) {
  return (
    <form action={onClick}>
      <button type="submit" className={cn("btn", className, { "btn-outline": outline })}>
        {children}
      </button>
    </form>
  );
}
