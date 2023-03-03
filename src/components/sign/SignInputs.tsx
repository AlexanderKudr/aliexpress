import { Box } from "../../components";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { errorMessages, FormProps } from "../../utils/forms";
import { controlledInput } from "../../utils/signUpInputs";
import { SignNames } from "../../types/components/forms";

type SignInputsProps<T> = {
  input: T;
  control: Control<FormProps>;
  errors: FieldErrors<FormProps>;
  passwordIcons: JSX.Element;
};

export default function SignInputs(
  { input, control, errors, passwordIcons }: SignInputsProps<any> /*<T> or research*/
) {
  const noPasswordIcon = (
    <Box key={input.id}>
      <Controller
        name={input.id as SignNames}
        control={control}
        rules={input.rules}
        defaultValue=""
        render={({ field }) => controlledInput(field, input)}
      />
      {errorMessages(input, errors, "sign-in")}
    </Box>
  );

  const withPasswordIcon = (
    <Box key={input.id}>
      <Controller
        name={"Password"}
        control={control}
        rules={input.rules}
        defaultValue=""
        render={({ field }) => controlledInput(field, input, passwordIcons)}
      />
      {errorMessages(input, errors, "sign-in")}
    </Box>
  );

  return input.password === false ? noPasswordIcon : withPasswordIcon;
}
