import { FieldErrors } from "react-hook-form";
import { FormProps, validationRules } from "./forms";

const signInInputs = (errors: FieldErrors<FormProps>, hidden: boolean) => {
  const { Email, Password } = validationRules(errors);
  return [
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
export { signInInputs };