import { Button as props } from "../types/components/ui";

export default function Button({ className, children, ...props }: props) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
