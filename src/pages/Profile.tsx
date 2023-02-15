import Aside from "../components/Aside";
import Box from "../components/Box";
import Logo from "../components/Logo";

export default function Profile() {
  return (
    <Box className="flex">
      <Aside className="aside">
        <Logo />
        <div>
          <div>Dashboard-Logo</div>
          <div>Dashboard-text</div>
        </div>
        <div>
          <div>Settings-Logo</div>
          <div>Settings-text</div>
        </div>
        <div>
          <div>Profile-logo</div>
          <div>Profile-text</div>
        </div>
      </Aside>
      <Box className="profile">
        <Box className="top-bar"></Box>
        <Box className="layout"></Box>
      </Box>
    </Box>
  );
}
