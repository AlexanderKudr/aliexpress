import { useState } from "react";
import { Box } from "../../../components";
import Sidebar from "../../../layouts/Sidebar";
import Dashboard from "./tabs/Dashboard";
import Profile from "./tabs/Profile";
import Settings from "./tabs/Settings";

export default function UserRoot() {
  const [tabNum, setTabNum] = useState(0);

  const tabs = () => {
    if (tabNum === 1) {
      return <Settings />;
    } else if (tabNum === 2) {
      return <Profile />;
    } else {
      return <Dashboard />;
    }
  };

  return (
    <Box className="dashboard">
      <Sidebar setTabNum={setTabNum} />
      {tabs()}
    </Box>
  );
}
