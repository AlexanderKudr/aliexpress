import { InputHTMLAttributes } from "react";

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  className?: string;
};

export type FormValues = {
  Firstname: string;
  Lastname: string;
  Email: string;
  "Contact number": string;
  Address: string;
  Country: string;
  State: string;
  "Zip code": string;
  City: string;
  Password: string;
};

export default function CustomInput({ className, label, value, ...rest }: CustomInputProps) {
  return (
    <div className={className}>
      <input type="text" {...rest} value={value} />
      {label && <label htmlFor={rest.id}>{label}</label>}
    </div>
  );
}
