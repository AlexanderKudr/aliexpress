import { Box } from "../../components";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { errorMessages, FormProps, SignNames } from "../../utils/forms";
import { signInInputs, signInput } from "../../utils/signInInputs";

type SignInputsProps<T> = {
  input: T;
  control: Control<FormProps>;
  errors: FieldErrors<FormProps>;
  passwordIcons: JSX.Element;
};
export default function SignInputs({
  input,
  control,
  errors,
  passwordIcons,
}: SignInputsProps<any>) {
  const noPasswordIcon = (
    <Box key={input.id}>
      <Controller
        name={input.id as SignNames}
        control={control}
        rules={input.rules}
        defaultValue=""
        render={({ field }) => signInput(field, input)}
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
        render={({ field }) => signInput(field, input, passwordIcons)}
      />
      {errorMessages(input, errors, "sign-in")}
    </Box>
  );

  return input.password === false ? noPasswordIcon : withPasswordIcon;
}
