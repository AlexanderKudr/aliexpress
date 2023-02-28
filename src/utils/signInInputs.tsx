import { ControllerRenderProps, FieldErrors } from "react-hook-form";
import { SignInput } from "../components/forms/SignInput";
import { FormProps, validationRules } from "./forms";

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
type signInputProps = (
  field:
    | ControllerRenderProps<FormProps, keyof FormProps>
    | ControllerRenderProps<FormProps, "Password">,
  input: Input,
  children?: React.ReactNode
) => JSX.Element;

const signInput: signInputProps = (field, input, children) => (
  <SignInput
    {...field}
    className={input.className}
    labelFor={input.labelFor}
    label={input.label}
    type={input.type}
    id={input.id}
    placeholder={input.placeholder}
    autoComplete="on"
  >
    {children}
  </SignInput>
);
const inputs = (errors: FieldErrors<FormProps>, hidden: boolean) => {
  const { Firstname, Lastname, Email, Password } = validationRules(errors);
  return [
    {
      id: "Firstname",
      placeholder: "Enter first name",
      labelFor: "First name",
      label: "First name",
      type: "text",
      className: "group",
      password: false,
      rules: Firstname,
    },
    {
      id: "Lastname",
      placeholder: "Enter last name",
      labelFor: "Lastname",
      label: "Last name",
      type: "text",
      className: "group",
      password: false,
      rules: Lastname,
    },
    {
      id: "Email",
      placeholder: "Enter email",
      labelFor: "Email",
      label: "Email",
      type: "text",
      className: "group",
      password: false,
      rules: Email,
    },
    {
      id: "Password",
      placeholder: "Enter password",
      labelFor: "Password",
      label: "Password",
      type: hidden ? "text" : "password",
      className: "group password",
      password: true,
      rules: Password,
    },
  ];
};
export { signInput, inputs };
