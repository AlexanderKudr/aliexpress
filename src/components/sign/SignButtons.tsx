import Box from "../Box";
import Button from "../Button";
import { Google } from "../icons";
import Spinner from "../Spinner";

export default function SignButtons({
  loading,
  variant,
}: {
  //todo: add logical part to sign(in/up) button
  loading: boolean;
  variant: "in" | "up";
}) {
  return (
    <Box className="sign-buttons">
      <Button disabled={loading === true} className="Button-sign" type="submit">
        {loading && <Spinner className="spinner-signup" />}{" "}
        <span className="sign-text">Sign {variant}</span>
      </Button>
      <Button className="Button-sign google" type={"button"}>
        <Google />
        <span>Sign {variant} with Google</span>
      </Button>
    </Box>
  );
}
