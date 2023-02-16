import { Aside, Box, BrandLogo, Header } from "../components";
import { Sidebar as props } from "../types/layouts";
import { links } from "../utils/layouts/links";

export default function Sidebar({ tabNum, setTabNum }: props) {

  const navlinks = links.map(({ logo, header, id }) => {
    const activeClass = (className: string) => (tabNum === id ? `${className}-active` : className);
    console.log("logo", logo)
    return (
      <Box key={id} className={activeClass("links")} onClick={() => setTabNum(id)}>
        {logo}
        <Header className={activeClass("sidebar-header")} variant={"h2"}>
          {header}
        </Header>
      </Box>
    );
  });

  return (
    <Aside className="sidebar">
      <BrandLogo className="sidebar-logo" />
      <Box className="sidebar-links-flex">{navlinks}</Box>
    </Aside>
  );
}
