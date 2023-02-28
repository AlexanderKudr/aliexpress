import { ReactNode } from "react";

export default function ErrorMessage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`error-message ${className}`}>{children}</p>;
}
