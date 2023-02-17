import { Dropdown as props } from "../types/components";

export default function Dropdown({ className, children, ...props }: props) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}
