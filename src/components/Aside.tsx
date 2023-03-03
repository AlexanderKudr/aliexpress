import { Aside as prop } from "../types/components/ui";

export default function Aside({ children, className }: prop) {
  return <aside className={className}>{children}</aside>;
}
