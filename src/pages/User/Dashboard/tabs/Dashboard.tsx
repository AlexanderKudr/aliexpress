import { Image, Box, Button } from "../../../../components";
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
        <Form className="form">
          <Box className="names">
            <Box>
              <label htmlFor="firstName">Firstname</label>
              <input id="Firstname" type="text" />
            </Box>
            <Box>
              <label htmlFor="Lastname">Lastname</label>
              <input id="Lastname" type="text" />
            </Box>
          </Box>
          <Box className="email">
            <label htmlFor="Email">Email</label>
            <input id="Email" type="text" />
          </Box>
          <Box className="contact-number">
            <label htmlFor="Contact number">Contact number</label>
            <input id="Contact number" type="text" />
          </Box>
          <Box className="address">
            <label htmlFor="Address">Address</label>
            <input id="Address" type="text" />
          </Box>
          <Box className="country-state">
            <Box>
              <label htmlFor="Country">Country</label>
              <input id="Country" type="text" />
            </Box>
            <Box>
              <label htmlFor="State">State</label>
              <input id="State" type="text" />
            </Box>
          </Box>
          <Box className="zip-city">
            <Box>
              <label htmlFor="Zip code">Zip code</label>
              <input id="Zip code" type="text" />
            </Box>
            <Box>
              <label htmlFor="City">City</label>
              <input id="City" type="text" />
            </Box>
          </Box>
          <Box className="password">
            <label htmlFor="Password">Password</label>
            <input id="Password" type="text" />
          </Box>
          <Box className="buttons">
            <Button className="Button-save">Save</Button>
            <Button className="Button-cancel">Cancel</Button>
          </Box>
        </Form>
      </Box>
    </Box>
  );
}
