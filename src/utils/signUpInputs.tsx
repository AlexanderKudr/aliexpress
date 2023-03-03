import {  FieldErrors } from "react-hook-form";
import { SignInput } from "../components/forms/SignInput";
import { FormProps, validationRules } from "./forms";
import { controlledInput as props } from "../types/components/forms";


const controlledInput: props = (field, input, children) => (//todo: after logic is done, remove into forms
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

const signUpInputs = (errors: FieldErrors<FormProps>, hidden: boolean) => {
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
export { controlledInput, signUpInputs };
