import { Box, Header, Image, Button, Dropdown } from "../components";
import { Chevron } from "../components/icons";
import userIcon from "../assets/images/userIcon.jpg";
import { useState } from "react";
import { activeClass } from "../services/functions/reuseClasses";
import { dropdownData } from "../utils/layouts/dropdownData";

//todo refactor into navbar
export default function Userbar() {
  
  const dropdownClass = `dropdown`;
  const [open, setOpen] = useState(false);
  const dropdownList = dropdownData.map(({ icon, text, id }) => (
    <li key={id} className={activeClass(open, `${dropdownClass}-li`)}>
      <span className={`${dropdownClass}-li-svg`}>{icon}</span>
      <Header variant={"h3"}>{text}</Header>
    </li>
  ));

  return (
    <Box className="userbar">
      <Dropdown
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(!open)}
        className={dropdownClass}
      >
        <Button className={`${dropdownClass}-user`}>
          <Box>
            <Image src={userIcon} alt={"userIcon"} width={25} height={25} />
            <Header variant={"h2"}>Trenet</Header>
          </Box>
          <Chevron />
        </Button>
        <ul className={activeClass(open, `${dropdownClass}-ul`)}>{dropdownList}</ul>
      </Dropdown>
    </Box>
  );
}
