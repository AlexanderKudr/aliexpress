import { Controller } from "react-hook-form";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { SignNames, errorMessages } from "../../utils/forms";
import { signInput } from "../../utils/signUpInputs";
import Box from "../Box";

const SignInputs = <T,>({ array }: { array: T[] }) => {
  const { control, errors } = useHookForm();
  const { icons: passwordIcons } = usePassword("group-eye-icon");
  const arrInputs = array.map((input: any) => {
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
  });

  return <>{arrInputs}</>;
};
export default SignInputs;
