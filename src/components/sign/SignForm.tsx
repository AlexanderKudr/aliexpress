import { FormEvent } from "react";
import Form from "../forms/Form";

export default function SignForm({
  children,
  onSubmit,
}: {
  children: React.ReactNode;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <Form className="sign-form" onSubmit={onSubmit}>
      {children}
    </Form>
  );
}
