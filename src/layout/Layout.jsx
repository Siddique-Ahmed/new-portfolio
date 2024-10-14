import React, { useState } from "react";
import AsideBar from "../components/asideBar/AsideBar";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <Header toggle={{ isToggle, setIsToggle }} />
      <main className="w-full lg:flex">
        <AsideBar isToggle={isToggle} />
        {children}
      </main>
    </>
  );
};

export default Layout;
