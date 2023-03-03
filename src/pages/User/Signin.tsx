import { Box } from "../../components";
import Form from "../../components/forms/Form";
import { FormProps } from "../../utils/forms";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { signInInputs } from "../../utils/signInInputs";
import { SignHeader, SignInputs, SignButtons, SignText } from "../../components/sign";

export default function Signin() {
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
  return (
    <Box className="sign-container">
      <SignHeader variant="in" />
      <Form className="sign-form" onSubmit={handleSubmit(onSubmit)}>
        <SignInputs array={signInInputs(errors, hidden)} />
        <SignButtons />
      </Form>
      <SignText link={"/user/signup"}/>
    </Box>
  );
}
