type BrandLogo = { className?: string };
type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant: React.ElementType;
};
type UtilityComponent = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};

type Button = UtilityComponent &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type Box = UtilityComponent & React.HTMLAttributes<HTMLDivElement>;
type Aside = UtilityComponent;
type Section = UtilityComponent;

type Tabs = {
  [key: number]: JSX.Element;
};
type Dropdown = UtilityComponent;
export type { Box, Button, Image, Section, Aside, HeadingProps, BrandLogo, Tabs, Dropdown };
