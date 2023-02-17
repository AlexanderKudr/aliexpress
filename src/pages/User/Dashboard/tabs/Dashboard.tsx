import { Image, Box } from "../../../../components";
import Userbar from "../../../../layouts/Userbar";
import UserImage from "../../../../assets/images/UserImage.jpg";
import { Edit } from "../../../../components/icons";
import Form from "../../../../components/forms/Form";

export default function Dashboard() {
  return (
    <Box className="dashboard">
      <Userbar />
      <Box className="hero">
        <Box className={"image-container"}>
          <Image src={UserImage} width={100} height={100} alt={"user image"} />
          <Edit className={"edit-icon"} />
        </Box>
        <Form>
          <Box>
            <label htmlFor="firstName">Firstname</label>
            <input id="email" type="text" />
          </Box>
          <Box>
            <label htmlFor="firstName">Firstname</label>
            <input id="email" type="text" />
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
