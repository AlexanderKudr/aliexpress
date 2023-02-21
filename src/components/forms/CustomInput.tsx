import { InputHTMLAttributes } from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};


export default function CustomInput({ className, label, value, ...rest }: CustomInputProps) {
  return (
    <div className={className}>
      <input type="text" {...rest} value={value} />
      {label && <label htmlFor={rest.id}>{label}</label>}
    </div>
  );
}
