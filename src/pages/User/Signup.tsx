import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Button } from "../../components";
import Form from "../../components/forms/Form";
import { Google } from "../../components/icons";
import SignHeader from "../../components/sign/SignHeader";
import Spinner from "../../components/Spinner";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { errorMessages, FormProps, SignNames } from "../../utils/forms";
import { signInInputs, signInput } from "../../utils/signInInputs";
//add logic on submit

export default function Signup() {
  const { hidden, icons: passwordIcons } = usePassword("group-eye-icon");
  const { handleSubmit, control, errors, loading, setLoading } = useHookForm();

  const onSubmit = (data: FormProps) => {
    if (loading === true) return;
    setLoading(true);
    const timeout = setTimeout(() => {
      console.log(data);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  };
  const mappedSignInputs = signInInputs(errors, hidden).map((input) => {
    return input.password === false ? (
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
    ) : (
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
  });
  const buttons = (
    <Box className="buttons">
      <Button disabled={loading === true} className="Button-signup" type="submit">
        {loading && <Spinner className="spinner-signup" />}{" "}
        <span className="sign-text">Sign up</span>
      </Button>
      <Button className="Button-signup google" type={"button"}>
        <Google />
        <span>Sign up with Google</span>
      </Button>
    </Box>
  );

  return (
    <Box className="signup-container">
      <SignHeader variant="up" />
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        {mappedSignInputs}
        {buttons}
      </Form>
      <p className="redirect">
        <span>Already have signed up?</span>
        <Link to={"/user/signin"}>Click here</Link>
      </p>
    </Box>
  );
}
