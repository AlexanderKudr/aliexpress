import { ControllerRenderProps } from "react-hook-form";

type FormProps = {
  id: string;
  Firstname: string;
  Lastname: string;
  Email: string;
  Number: string;
  Address: string;
  Country: string;
  State: string;
  Zip: string;
  City: string;
  Password: string;
};
type SignNames = keyof FormProps;

type Input = {
  id: string;
  placeholder: string;
  labelFor: string;
  label: string;
  type: string;
  className: string;
  password: boolean;
  rules: Record<string, unknown>; // Replace with the actual type of rules
};
type controlledInput = (
  field:
    | ControllerRenderProps<FormProps, keyof FormProps>
    | ControllerRenderProps<FormProps, "Password">,
  input: Input,
  children?: React.ReactNode
) => JSX.Element;
export type { FormProps, SignNames, controlledInput };