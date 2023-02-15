type UtilityComponent = {
  children?: React.ReactNode;
  className?: string;
};
type BrandLogo = { className?: string };
type Button = {
  className: string;
  text?: string;
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

type Box = UtilityComponent & React.HTMLAttributes<HTMLDivElement>;
type Section = UtilityComponent;
type Aside = UtilityComponent;
type UserBadge = UtilityComponent;

export type { Box, Button, Image, Section, Aside, HeadingProps, BrandLogo, UserBadge };
