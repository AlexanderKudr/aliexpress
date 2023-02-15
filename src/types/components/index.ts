type UtilityComponent = {
  children?: React.ReactNode;
  className?: string;
};
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
type Box = UtilityComponent;
type Section = UtilityComponent;
type Aside = UtilityComponent;

export type { Box, Button, Image, Section, Aside };
