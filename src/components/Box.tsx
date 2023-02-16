import { Box as prop } from "../types/components";

export default function Box({ children, role, ...props }: prop) {
  return (
    <div {...props} role={role}>
      {children}
    </div>
  );
}
