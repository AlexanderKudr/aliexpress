import { forwardRef } from "react";
import { InputHTMLAttributes } from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};
type Ref = HTMLInputElement;
export const CustomInput = forwardRef<Ref, CustomInputProps>(
  ({ className, label, value, ...rest }, ref) => {
    return (
      <div className={className}>
        <input {...rest} ref={ref} value={value} />
        {label && <label htmlFor={rest.id}>{label}</label>}
      </div>
    );
  }
);
CustomInput.displayName = "CustomInput";
// export default function CustomInput({ className, label, value, ...rest }: CustomInputProps) {
//   return (
//     <div className={className}>
//       <input type="text" {...rest} value={value} />
//       {label && <label htmlFor={rest.id}>{label}</label>}
//     </div>
//   );
// }
