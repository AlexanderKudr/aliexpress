import { useHookForm } from "../../hooks/useHookForm";
import Box from "../Box";
import Button from "../Button";
import { Google } from "../icons";
import Spinner from "../Spinner";

export default function SignButtons() {
  const { loading } = useHookForm();
  return (
    <Box className="sign-buttons">
      <Button disabled={loading === true} className="Button-sign" type="submit">
        {loading && <Spinner className="spinner-signup" />}{" "}
        <span className="sign-text">Sign up</span>
      </Button>
      <Button className="Button-sign google" type={"button"}>
        <Google />
        <span>Sign up with Google</span>
      </Button>
    </Box>
  );
}
