import { useState } from "react";
import { Box } from "../../../components";
import Sidebar from "../../../layouts/Sidebar";
import Dashboard from "./tabs/Dashboard";
import Profile from "./tabs/Profile";
import Settings from "./tabs/Settings";
import { Tabs as props } from "../../../types/components";

export default function Root() {
  
  const [tabNum, setTabNum] = useState(0);
  const tabs: props = { 0: <Dashboard />, 1: <Settings />, 2: <Profile /> };
  const tabsHandler = (tabNum = 0) => tabs[tabNum];

  return (
    <Box className="root-dashboard">
      <Sidebar tabNum={tabNum} setTabNum={setTabNum} />
      {tabsHandler(tabNum)}
    </Box>
  );
}
