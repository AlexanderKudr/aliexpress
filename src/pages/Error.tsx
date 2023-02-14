import Navbar from "../layouts/Navbar";
import errorImage from "../assets/images/error.jpg";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Box from "../components/Box";

export default function ErrorPage() {
  const backToHome = (
    <Box>
      <h2>Whoops! Lost in Space?</h2>
      <p>The page you’re looking for isn’t found :( We suggest you to back to home</p>
      <Link to={"/"}>
        <Button className="Button-back-to-home" text="Back to Home" />
      </Link>
    </Box>
  );

  return (
    <Box className={"error-page"}>
      <Navbar />
      <Image src={errorImage} alt={"error image"} width={400} height={400} />
      {backToHome}
    </Box>
  );
}
