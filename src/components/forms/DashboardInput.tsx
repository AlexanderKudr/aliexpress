import { forwardRef } from "react";
import { InputHTMLAttributes } from "react";

type DashboardInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};
type Ref = HTMLInputElement;
export const DashboardInput = forwardRef<Ref, DashboardInputProps>(
  ({ className, label, value, ...rest }, ref) => {
    return (
      <div className={className}>
        <input {...rest} ref={ref} value={value} />
        {label && <label htmlFor={rest.id}>{label}</label>}
      </div>
    );
  }
);
DashboardInput.displayName = "DashboardInput";
// export default function CustomInput({ className, label, value, ...rest }: CustomInputProps) {
//   return (
//     <div className={className}>
//       <input type="text" {...rest} value={value} />
//       {label && <label htmlFor={rest.id}>{label}</label>}
//     </div>
//   );
// }
