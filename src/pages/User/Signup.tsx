import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Button, Header } from "../../components";
import Form from "../../components/forms/Form";
import { Google, Logo } from "../../components/icons";
import { useHookForm } from "../../hooks/useHookForm";
import { usePassword } from "../../hooks/usePassword";
import { errorMessages, FormProps, SignNames } from "../../utils/forms";
import { inputs, signInput } from "../../utils/signInInputs";
//rewriting into custom hook
//finishing carousel

export default function Signup() {
  const { hidden, icons: passwordIcons } = usePassword("group-eye-icon");
  const { handleSubmit, control, errors } = useHookForm();
  const onSubmit = (data: FormProps) => console.log(data);

  const signInputs = inputs(errors, hidden).map((input) => {
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

  return (
    <Box className="signup">
      <Box className="left-block">
        <Box className="header">
          <Logo />
          <Header variant={"h1"}>Sign up</Header>
          <p>Welcome, please enter your details</p>
        </Box>
        <Form className="form" onSubmit={handleSubmit(onSubmit)}>
          {signInputs}
          <Box className="buttons">
            <Button className="Button-signup" type="submit">
              Sign up
            </Button>
            <Button className="Button-signup google" type="submit">
              <Google />
              <span>Sign up with Google</span>
            </Button>
          </Box>
        </Form>
        <p>
          <span>Already have signed up?</span>
          <Link to={"/user/signin"}>Click here</Link>
        </p>
      </Box>
      {/* ////////////// */}
      <div className="carousel">
        <div className="pictures">
          <div>1 pic</div>
          <div>2 pic</div>
          <div>3 pic</div>
        </div>
        <div className="text">
          <h2>Lorem ipsum</h2>
          <p style={{ width: "200px" }}>Get new fashioned clothes with 50% sale every weekend</p>
        </div>
      </div>
    </Box>
  );
}
