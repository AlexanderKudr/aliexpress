import { Dropdown as props } from "../types/components/ui";

export default function Dropdown({ className, children, ...props }: props) {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
}
