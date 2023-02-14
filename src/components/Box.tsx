import { Box as prop } from "../types/components";

export default function Box({ className, children }: prop) {
  return <div className={className}>{children}</div>;
}
