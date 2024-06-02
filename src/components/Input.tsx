// write me a customizable input component, model after <input type="text" placeholder="Untitled" className="input w-full" />

import { cn } from "@/utils";
import React from "react";

type InputType = "text" | "number";

type Props = {
  placeholder?: string;
  type: InputType;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function Input({ placeholder, onChange, className, type, value }: Props) {
  return (
    <input type={type} placeholder={placeholder} className={cn("input", className)} onChange={onChange} value={value} />
  );
}
