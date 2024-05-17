interface TextProps {
  className?: string;
  children: React.ReactNode;
}

export function H1({ className, children }: TextProps) {
  return <h1 className={`text-4xl ${className}`}>{children}</h1>;
}

export function H2({ className, children }: TextProps) {
  return <h2 className={`text-3xl ${className}`}>{children}</h2>;
}

export function H3({ className, children }: TextProps) {
  return <h3 className={`text-2xl ${className}`}>{children}</h3>;
}

export function H4({ className, children }: TextProps) {
  return <h4 className={`text-xl ${className}`}>{children}</h4>;
}

export function H5({ className, children }: TextProps) {
  return <h5 className={`text-lg ${className}`}>{children}</h5>;
}

export function H6({ className, children }: TextProps) {
  return <h6 className={`text-base ${className}`}>{children}</h6>;
}

export function P({ className, children }: TextProps) {
  return <p className={`text-base ${className}`}>{children}</p>;
}
