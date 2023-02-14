import { Button as props } from "../types/components";

export default function Button({ className, text }: props) {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
}
