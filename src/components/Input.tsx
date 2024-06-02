// write me a customizable input component, model after <input type="text" placeholder="Untitled" className="input w-full" />

import { cn } from "@/utils";
import React from "react";

type InputType = "text" | "number";

interface Props {
  placeholder?: string;
  type: InputType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function Input({ placeholder, onChange, className, type }: Props) {
  return <input type={type} placeholder={placeholder} className={cn("input", className)} onChange={onChange} />;
}
