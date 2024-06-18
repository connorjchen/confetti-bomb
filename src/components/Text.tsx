import { cn } from "@/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
  bold?: boolean;
};

export function H1({ className, children, bold }: Props) {
  return <h1 className={cn("text-4xl", { "font-bold": bold }, className)}>{children}</h1>;
}

export function H2({ className, children, bold }: Props) {
  return <h2 className={cn("text-3xl", { "font-bold": bold }, className)}>{children}</h2>;
}

export function H3({ className, children, bold }: Props) {
  return <h3 className={cn("text-2xl", { "font-bold": bold }, className)}>{children}</h3>;
}

export function H4({ className, children, bold }: Props) {
  return <h4 className={cn("text-xl", { "font-bold": bold }, className)}>{children}</h4>;
}

export function H5({ className, children, bold }: Props) {
  return <h5 className={cn("text-lg", { "font-bold": bold }, className)}>{children}</h5>;
}

export function P({ className, children, bold }: Props) {
  return <p className={cn("text-base", { "font-bold": bold }, className)}>{children}</p>;
}
