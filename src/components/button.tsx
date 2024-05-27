import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: Props) {
  return (
    <form action={onClick}>
      <button type="submit" className={`btn ${className}`}>
        {children}
      </button>
    </form>
  );
}
