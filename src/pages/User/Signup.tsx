import Form from "../../components/forms/Form";
import { SignButtons, SignContainer, SignForm, SignText } from "../../components/sign";
import SignHeader from "../../components/sign/SignHeader";
import SignInputs from "../../components/sign/SignInputs";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { FormProps } from "../../utils/forms";
import { signUpInputs } from "../../utils/signUpInputs";
//add logic on submit

export default function Signup() {
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
      <SignHeader variant="up" />
      <SignForm onSubmit={handleSubmit(onSubmit)}>
        {signUpInputs(errors, hidden).map((input) => (
          <SignInputs
            key={input.id}
            input={input}
            control={control}
            errors={errors}
            passwordIcons={passwordIcons}
          />
        ))}
        <SignButtons loading={loading} variant={"up"} />
      </SignForm>
      <SignText link={"/user/signin"} />
    </SignContainer>
  );
}
