// write me a customizable input component, model after <input type="text" placeholder="Untitled" className="input w-full" />

import { cn } from "@/utils";
import React from "react";

type InputType = "text" | "number" | "range";

type Props = {
  placeholder?: string;
  type: InputType;
  value?: string | number;
  min?: number;
  max?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function Input({ placeholder, onChange, className, type, value, max, min }: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      className={cn(className, { range: type === "range", input: type !== "range" })}
      onChange={onChange}
      value={value}
    />
  );
}
