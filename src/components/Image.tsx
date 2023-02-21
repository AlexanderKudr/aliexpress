import { Image as props } from "../types/components";

export default function Image({ alt, ...props }: props) {
  return <img alt={alt} {...props} />;
}
