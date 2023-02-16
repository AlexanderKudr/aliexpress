import Navbar from "../layouts/Navbar";
import errorImage from "../assets/images/error.jpg";
import { Link } from "react-router-dom";
import { Button, Box, Image, Header } from "../components";

export default function ErrorPage() {

  return (
    <Box className={"error-page"}>
      <Navbar />
      <Image src={errorImage} alt={"error image"} width={400} height={400} />
      <Box>
        <Header variant={"h2"}>Whoops! Lost in Space?</Header>
        <p>The page you’re looking for isn’t found :( We suggest you to back to home</p>
        <Link to={"/"}>
          <Button className="Button-back-to-home" text="Back to Home" />
        </Link>
      </Box>
    </Box>
  );
}
