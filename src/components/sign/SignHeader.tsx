import Box from "../Box";
import Header from "../Header";
import { Logo } from "../icons";

export default function SignHeader({ variant }: { variant: string }) {
  return (
    <Box className="sign-header">
      <Logo />
      <Header variant={"h1"}>Sign {variant}</Header>
      <p>Welcome, please enter your details</p>
    </Box>
  );
}
