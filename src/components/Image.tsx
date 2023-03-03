import { Image as props } from "../types/components/ui";

export default function Image({ alt, ...props }: props) {
  return <img alt={alt} {...props} />;
}
