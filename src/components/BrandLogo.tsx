import { Box, Header } from "./index";
import { Logo } from "./icons";
import { BrandLogo as props } from "../types/components";

export default function BrandLogo({ className }: props) {
  return (
    <Box className={className}>
      <Logo />
      <Header variant={"h1"} className="logo-text">
        AlexShop
      </Header>
    </Box>
  );
}
