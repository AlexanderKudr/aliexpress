import { Box as prop } from "../types/components";

export default function Box({ className, children, role }: prop) {
  return <div role={role} className={className}>{children}</div>;
}
