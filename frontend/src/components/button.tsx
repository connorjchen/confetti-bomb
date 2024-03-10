"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={`btn btn-ghost text-xl ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
