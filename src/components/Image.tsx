import { Image as props } from "../types/components";

export default function Image({ ...props }: props) {
  return <img {...props} />;
}
