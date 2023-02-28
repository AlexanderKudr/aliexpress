import { FieldErrors } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

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

const validationRules = (errors: FieldErrors<FormProps>) => {
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
const typeOfErrors = ["required", "minLength", "pattern"] as const;
const errorMessages = (input: any, errors: FieldErrors<FormProps>, className?: string) =>
  typeOfErrors.map(
    (type) =>
      errors[input.id as keyof FormProps]?.type === type && (
        <ErrorMessage key={input.id} className={className}>
          {errors[input.id as keyof FormProps]?.message}
        </ErrorMessage>
      )
  );
export { validationRules, errorMessages, typeOfErrors };
export type { SignNames, FormProps };
