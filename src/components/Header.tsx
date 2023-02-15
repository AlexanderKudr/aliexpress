import { HeadingProps as props } from "../types/components";

const Header = ({ variant, children, className, onClick }: props) => {
  const Heading = variant;
  return (
    <Heading onClick={onClick} className={className}>
      {children}
    </Heading>
  );
};
export default Header;
