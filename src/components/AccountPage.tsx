import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SideBar from "./SideBar"
import { useToggle } from "../ts/ToggleHeader";
import React from "react";

export const AccountPage = () => {
  const lightMode = useToggle((state) => state.light);
  return (
    <div className={`"App" ${lightMode ? "" : "dark"}`}>
      <Header />
      <SideBar />
      
    </div>
  );
};

export default AccountPage;