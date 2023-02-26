import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import { Box, Button, Header } from "../../components";
import Form from "../../components/forms/Form";
import { SignInput } from "../../components/forms/SignInput";
import { Google, Logo } from "../../components/icons";
import { usePassword } from "../../hooks/usePassword";
import { rules } from "../../utils/formDashboard";
//rewriting into custom hook
export default function Signup() {
  const { hidden, icons } = usePassword("group-eye-icon");
  type SignInInputValues = {
    Firstname: string;
    Lastname: string;
    Email: string;
    Password: string;
  };
  type Name = keyof SignInInputValues;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInInputValues>({ reValidateMode: "onSubmit" });
  const { Firstname, Lastname, Email, Password } = rules(errors);

  const onSubmit = (data: SignInInputValues) => console.log(data);
  const inputs = [
    {
      id: "Firstname",
      placeholder: "Enter first name",
      labelFor: "First name",
      label: "First name",
      type: "text",
      className: "group",
      password: false,
      rules: Firstname,
    },
    {
      id: "Lastname",
      placeholder: "Enter last name",
      labelFor: "Lastname",
      label: "Last name",
      type: "text",
      className: "group",
      password: false,
      rules: Lastname,
    },
    {
      id: "Email",
      placeholder: "Enter email",
      labelFor: "Email",
      label: "Email",
      type: "email",
      className: "group",
      password: false,
      rules: Email,
    },
    {
      id: "Password",
      placeholder: "Enter password",
      labelFor: "Password",
      label: "Password",
      type: hidden ? "text" : "password",
      className: "group password",
      password: true,
      rules: Password,
    },
  ];

  const signInputs = inputs.map((input) =>
    input.password === false ? (
      <Controller
        key={input.id}
        name={input.id as Name}
        control={control}
        rules={input.rules}
        defaultValue=""
        render={({ field }) => (
          <SignInput
            {...field}
            className={input.className}
            labelFor={input.labelFor}
            label={input.label}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
          />
        )}
      />
    ) : (
      <Controller
        key={input.id}
        name={"Password"}
        control={control}
        rules={input.rules}
        defaultValue=""
        render={({ field }) => (
          <SignInput
            {...field}
            className={input.className}
            labelFor={input.labelFor}
            label={input.label}
            type={input.type}
            id={input.id}
            placeholder={input.placeholder}
          >
            {icons}
          </SignInput>
        )}
      />
    )
  );

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
