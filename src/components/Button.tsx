import { Button as props } from "../types/components";

export default function Button({ className, children, ...props }: props) {
  return (
    <button {...props} type="button" className={className}>
      {children}
    </button>
  );
}
