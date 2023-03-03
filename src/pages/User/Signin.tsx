import { FormProps } from "../../utils/forms";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { signInInputs } from "../../utils/signInInputs";
import {
  SignHeader,
  SignInputs,
  SignButtons,
  SignText,
  SignContainer,
  SignForm,
} from "../../components/sign";

export default function Signin() {
  const { hidden, icons: passwordIcons } = usePassword("group-eye-icon");
  const { handleSubmit, errors, loading, setLoading, control } = useHookForm();

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
    <SignContainer>
      <SignHeader variant="in" />
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        {signInInputs(errors, hidden).map((input) => (
          <SignInputs
            key={input.id}
            input={input}
            control={control}
            errors={errors}
            passwordIcons={passwordIcons}
          />
        ))}
        <SignButtons loading={loading} variant={"in"} />
      </SignForm>
      <SignText link={"/user/signup"} />
    </SignContainer>
  );
}
