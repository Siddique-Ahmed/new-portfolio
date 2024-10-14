import React from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ toggle }) => {
  const { isToggle, setIsToggle } = toggle;
  const toggleControl = () => {
    setIsToggle(!isToggle);
  };

  return (
    <header className="bg-white fixed top-0 left-0 px-3 py-2 w-full z-20 lg:hidden block transition-all">
      <nav className="min-h-9 w-full flex items-center justify-between">
        <div className="logo flex-grow">
          <h1 className="text-md font-bold text-[#d9823e]">SIDDIQUE AHMED</h1>
        </div>
        <button className="p-2 bg-[#d9823e]" onClick={toggleControl}>
          <FaBars size={20} className="text-white" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
