import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <form action={onClick}>
      <button type="submit" className={`btn ${className}`}>
        {children}
      </button>
    </form>
  );
}
