import { ReactNode } from "react";
import { FieldErrors } from "react-hook-form";
import { DashboardInput } from "../components/forms/DashboardInput";

export type FormValues = {
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
const ErrorMessage = ({ children }: { children: ReactNode }) => (
  <p style={{ color: "red", fontSize: "0.7rem", marginTop: "-5px" }}>{children}</p>
);
const inputComponent = (
  field: any, //todo: add type to field
  label: string,
  type?: React.HTMLInputTypeAttribute | undefined
) => (
  <DashboardInput {...field} type={type} label={label} className={"input-custom"} placeholder=" " />
);

const rules = (errors: FieldErrors<FormValues>) => {
  return {
    Firstname: {
      required: { value: true, message: "Required" },
      minLength: { value: 3, message: "Too short" },
      error: {
        required: errors.Firstname?.type === "required" && (
          <ErrorMessage>This field is required</ErrorMessage>
        ),
        minLength: errors.Firstname?.type === "minLength" && <ErrorMessage>Too short</ErrorMessage>,
      },
    },
    Lastname: {
      required: { value: true, message: "Required" },
      minLength: { value: 3, message: "Too short" },
      error: {
        required: errors.Lastname?.type === "required" && (
          <ErrorMessage>This field is required</ErrorMessage>
        ),
        minLength: errors.Lastname?.type === "minLength" && <ErrorMessage>Too short</ErrorMessage>,
      },
    },
    Email: {
      required: { value: true, message: "Required" },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "invalid email",
      },
      error: {
        required: errors.Email?.type === "required" && (
          <ErrorMessage>{errors.Email?.message}</ErrorMessage>
        ),
        pattern: errors.Email?.type === "pattern" && (
          <ErrorMessage>{errors.Email?.message}</ErrorMessage>
        ),
      },
    },
    Number: {
      required: { value: true, message: "Required" },
      minLength: { value: 10, message: "Must be at least 10 characters" },
      pattern: { value: /^[0-9]*$/, message: "Must be a valid phone number" },
      error: {
        required: errors.Number?.type === "required" && (
          <ErrorMessage>{errors.Number?.message}</ErrorMessage>
        ),
        minLength: errors.Number?.type === "minLength" && (
          <ErrorMessage>{errors.Number?.message}</ErrorMessage>
        ),
        pattern: errors.Number?.type === "pattern" && (
          <ErrorMessage>{errors.Number?.message}</ErrorMessage>
        ),
      },
    },
    Password: {
      required: { value: true, message: "Required" },
      minLength: { value: 6, message: "Must be at least 6 characters" },
      error: {
        required: errors.Password?.type === "required" && (
          <ErrorMessage>{errors.Password?.message}</ErrorMessage>
        ),
        minLength: errors.Password?.type === "minLength" && (
          <ErrorMessage>{errors.Password?.message}</ErrorMessage>
        ),
      },
    },
  };
};
export { inputComponent, rules };
