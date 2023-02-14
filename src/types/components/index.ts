type Box = {
  className?: string;
  children?: React.ReactNode;
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
type Section = {
  children?: React.ReactNode;
  className?: string;
};
export type { Box, Button, Image, Section };
