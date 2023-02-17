import { Aside, Box, BrandLogo, Header } from "../components";
import { activeClass } from "../services/functions/reuseClasses";
import { Sidebar as props } from "../types/layouts";
import { links } from "../utils/layouts/links";
// todo refactor into a reusable component
export default function Sidebar({ tabNum, setTabNum }: props) {
  const navlinks = links(tabNum).map(({ logo, header, id }) => {
    const isTabEqualId = tabNum === id;
    
    return (
      <Box key={id} className={activeClass(isTabEqualId, "links")} onClick={() => setTabNum(id)}>
        {logo}
        <Header className={activeClass(isTabEqualId, "header")} variant={"h2"}>
          {header}
        </Header>
      </Box>
    );
  });

  return (
    <Aside className="sidebar">
      <BrandLogo className="logo" />
      <Box className="links-flex">{navlinks}</Box>
    </Aside>
  );
}
