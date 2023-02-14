import { Icons } from "../components/icons";
import TextInput from "../components/TextInput";
import Section from "../components/Section";

export default function Navbar() {
  const leftSection = (
    <Section className="nav-section">
      <div>
        <Icons.Logo />
        <h1 className="logo-text">AlexShop</h1>
      </div>
      <div>
        <h2>Category</h2>
        <Icons.Chevron />
      </div>
      <Icons.DividerY />
      <div>
        <h2>Contact us</h2>
      </div>
      <Icons.DividerY />
      <div>
        <h2>Home</h2>
      </div>
    </Section>
  );
  const rightSection = (
    <Section className="nav-section">
      <TextInput />
      <div>
        <Icons.Account />
        <h2>Account</h2>
      </div>
      <div>
        <Icons.Cart />
        <h2>Cart</h2>
      </div>
    </Section>
  );
  return (
    <nav>
      {leftSection}
      {rightSection}
    </nav>
  );
}
