import { Dashboard, Settings, User } from "../../components/icons";

export const links = (tabNum: number) => {
  const linksClassName = "links-svg";
  const isTabNum = (id: number) => (tabNum === id ? `${linksClassName}-active` : linksClassName);

  return [
    { id: 0, logo: <Dashboard className={isTabNum(0)} />, header: "Dashboard" },
    { id: 1, logo: <Settings className={isTabNum(1)} />, header: "Settings" },
    { id: 2, logo: <User className={isTabNum(2)} />, header: "Profile" },
  ];
};
