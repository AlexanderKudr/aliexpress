import { InputHTMLAttributes } from "react";

type BrandLogo = { className?: string };
type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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

type InputHTML = InputHTMLAttributes<HTMLInputElement>;
type SignInputProps = InputHTML & {
  label: string;
  labelFor: string;
  className?: string;
};

export type {
  SignInputProps,
  Box,
  Button,
  Image,
  Section,
  Aside,
  HeadingProps,
  BrandLogo,
  Tabs,
  Dropdown,
};
