import Navbar from "../layouts/Navbar";
import errorImage from "../assets/images/error.jpg";
import Image from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const cN = `error-page`;
  const returnBlock = (
    <div className={`${cN}-flex`}>
      <h2 className={`${cN}-h2`}>Whoops! Lost in Space?</h2>
      <p className={`${cN}-p`}>
        The page you’re looking for isn’t found :( We suggest you to back to home
      </p>
      <button onClick={() => navigate("/")} type="button" className="Button-back-to-home">
        Back to Home
      </button>
    </div>
  );
  const navigate = useNavigate();
  
  return (
    <div className={cN}>
      <Navbar />
      <Image src={errorImage} alt={"error image"} width={400} height={400} />
      {returnBlock}
    </div>
  );
}
