import { UserBadge as props } from "../types/components";
import Box from "./Box";

export default function UserBadge({ className, children }: props) {
  return <Box className={className}>{children}</Box>;
}
