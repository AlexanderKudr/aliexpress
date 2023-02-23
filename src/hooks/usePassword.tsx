import { useState } from "react";
import { Notvisible, Visible } from "../components/icons";

export const usePassword = () => {
  const [hidden, setHidden] = useState(false);
  const icons = hidden ? (
    <Visible className="eye-icon" onClick={() => setHidden(!hidden)} />
  ) : (
    <Notvisible className="eye-icon" onClick={() => setHidden(!hidden)} />
  );
  return {
    hidden,
    icons,
  }
};
