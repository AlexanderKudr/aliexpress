import Box from "../Box";
import { SignInputProps } from "../../types/components/ui";
import { forwardRef } from "react";
type Ref = HTMLInputElement;

export const SignInput = forwardRef<Ref, SignInputProps>(
  ({ label, labelFor, className, type, children, ...props }, ref) => {
    return (
      <Box className={className}>
        <label htmlFor={labelFor}>{label}</label>
        <input type={type} ref={ref} {...props} />
        {children}
      </Box>
    );
  }
);
SignInput.displayName = "SignInput";
