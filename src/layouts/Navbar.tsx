import { Chevron, DividerY, Account, Cart } from "../components/icons";
import { TextInput, Section, Header, BrandLogo } from "../components";
//todo merge with userbar
export default function Navbar() {
  const leftSection = (
    <Section className="nav-section">
      <BrandLogo className="logo" />
      <Header variant={"h2"}>
        Category
        <Chevron />
      </Header>
      <DividerY />
      <Header variant={"h2"}>Contact us</Header>
      <DividerY />
      <Header variant={"h2"}>About us</Header>
    </Section>
  );
  const rightSection = (
    <Section className="nav-section">
      <TextInput />
      <Header variant={"h2"}>
        <Account /> Account
      </Header>
      <Header variant={"h2"}>
        <Cart /> Cart
      </Header>
    </Section>
  );
  return (
    <nav>
      {leftSection}
      {rightSection}
    </nav>
  );
}
