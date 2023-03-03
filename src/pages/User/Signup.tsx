import { Link } from "react-router-dom";
import { Box, Button } from "../../components";
import Form from "../../components/forms/Form";
import { Google } from "../../components/icons";
import SignHeader from "../../components/sign/SignHeader";
import SignInputs from "../../components/sign/SignInputs";
import Spinner from "../../components/Spinner";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { FormProps } from "../../utils/forms";
import { signInInputs } from "../../utils/signInInputs";
//add logic on submit

export default function Signup() {
  const { hidden } = usePassword("group-eye-icon");
  const { handleSubmit, errors, loading, setLoading } = useHookForm();

  const onSubmit = (data: FormProps) => {
    if (loading === true) return;
    setLoading(true);
    const timeout = setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  };
console.log(errors, "errors");
  return (
    <Box className="sign-container">
      <SignHeader variant="up" />
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        {signInInputs(errors, hidden).map((input) => (
          <SignInputs
            key={input.id}
            input={input}
            control={control}
            errors={errors}
            passwordIcons={passwordIcons}
          />
        ))}
        {buttons}
      </Form>
      <SignText link={"/user/signin"} />
    </Box>
  );
}
