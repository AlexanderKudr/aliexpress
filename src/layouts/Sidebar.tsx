import { Aside, Box, BrandLogo, Header } from "../components";
import { Sidebar as props } from "../types/layouts";
import { links } from "../utils/layouts/links";

export default function Sidebar({ setTabNum }: props) {
  const navlinks = links.map(({ logo, header, id }) => (
    <Box key={id} onClick={() => setTabNum(id)}>
      {logo}
      <Header variant={"h2"}>{header}</Header>
    </Box>
  ));

  return (
    <Aside className="sidebar">
      <BrandLogo className="sidebar-logo" />
      <Box className="sidebar-navlinks">{navlinks}</Box>
    </Aside>
  );
}
