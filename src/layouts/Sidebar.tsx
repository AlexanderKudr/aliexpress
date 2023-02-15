import { Aside, Box, BrandLogo, Header } from "../components";
import { Dashboard, Settings, User } from "../components/icons";
import { Sidebar as props } from "../types/layouts";

export default function Sidebar({ setTabNum }: props) {
  const navlinks = [
    {
      logo: <Dashboard />,
      header: (
        <Header onClick={() => setTabNum(0)} variant={"h2"}>
          Dashboard
        </Header>
      ),
    },
    {
      logo: <Settings />,
      header: (
        <Header onClick={() => setTabNum(1)} variant={"h2"}>
          Settings
        </Header>
      ),
    },
    {
      logo: <User />,
      header: (
        <Header onClick={() => setTabNum(2)} variant={"h2"}>
          Profile
        </Header>
      ),
    },
  ];
  
  return (
    <Aside className="Sidebar">
      <BrandLogo className="logo-dashboard" />
      <Box className="navlinks">
        {navlinks.map(({ logo, header }) => (
          <Box>
            {logo}
            {header}
          </Box>
        ))}
      </Box>
    </Aside>
  );
}
