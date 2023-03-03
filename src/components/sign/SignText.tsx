import { Link } from "react-router-dom";

export default function SignText({ link }: { link: string }) {
  return (
    <p className="sign-redirect">
      <span>Already have signed up?</span>
      <Link to={link}>Click here</Link>
    </p>
  );
}
