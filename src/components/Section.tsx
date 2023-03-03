import { Section as prop } from "../types/components/ui";

export default function Section({ children, className }: prop) {
  return <section className={className}>{children}</section>;
}
