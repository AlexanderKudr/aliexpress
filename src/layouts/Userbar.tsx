import { Box, Header, UserBadge, Image } from "../components";
import { Chevron } from "../components/icons";
import userIcon from "../assets/images/userIcon.jpg";

export default function Userbar() {
  return (
    <Box className="top-bar">
      <UserBadge className="badge">
        <Box className="user">
          <Image src={userIcon} alt={"userIcon"} width={25} height={25} />
          <Header variant={"h2"}>Trenet</Header>
        </Box>
        <Chevron />
      </UserBadge>
    </Box>
  );
}
