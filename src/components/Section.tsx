import { Section as prop } from "../types/components";

export default function Section({ children, className }: prop) {
  return <section className={className}>{children}</section>;
}
