import { Aside as prop } from "../types/components";

export default function Aside({ children, className }: prop) {
  return <aside className={className}>{children}</aside>;
}
