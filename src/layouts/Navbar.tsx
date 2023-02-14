import { Icons } from "../components/icons";
import TextInput from "../components/TextInput";
import { Link } from "react-router-dom";

type ReactNode = { children?: React.ReactNode };

export default function Navbar() {
  const Section = ({ children }: ReactNode) => <section className={`section`}>{children}</section>;

  const leftSection = (
    <Section>
       <Link to='/'>
      <div>
     <Icons.Logo />
        <h1>AlexShop</h1>
      </div>
      </Link>
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
        <h2><Link to='/'>Home</Link></h2>
      </div>
    </Section>
  );
  const rightSection = (
    <Section>
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
    <>
      <nav>
        {leftSection}
        {rightSection}
      </nav>
    </>
  );
}
