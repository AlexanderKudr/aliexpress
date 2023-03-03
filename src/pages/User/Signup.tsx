import { Box } from "../../components";
import Form from "../../components/forms/Form";
import { FormProps } from "../../utils/forms";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { signUpInputs } from "../../utils/signUpInputs";
import { SignHeader, SignInputs, SignButtons, SignText } from "../../components/sign";
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
      <Form className="sign-form" onSubmit={handleSubmit(onSubmit)}>
        <SignInputs array={signUpInputs(errors, hidden)} />
        <SignButtons />
      </Form>
      <SignText link={"/user/signin"} />
    </Box>
  );
}
