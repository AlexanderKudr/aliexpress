import { useState } from "react";
import { Notvisible, Visible } from "../components/icons";

export const usePassword = (className?: string) => {
  const [hidden, setHidden] = useState(false);
  const icons = hidden ? (
    <Visible className={className} onClick={() => setHidden(!hidden)} />
  ) : (
    <Notvisible className={className} onClick={() => setHidden(!hidden)} />
  );
  return {
    hidden,
    icons,
  };
};
