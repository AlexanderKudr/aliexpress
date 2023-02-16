type BrandLogo = { className?: string };
type Button = {
  className: string;
  children: React.ReactNode;
};
type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
};
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant: React.ElementType;
};
type UtilityComponent = {
  children: React.ReactNode;
  className?: string;
};

type Aside = UtilityComponent;
type Box = UtilityComponent & React.HTMLAttributes<HTMLDivElement>;
type Section = UtilityComponent;

type Tabs = {
  [key: number]: JSX.Element;
};

export type { Box, Button, Image, Section, Aside, HeadingProps, BrandLogo, Tabs };
