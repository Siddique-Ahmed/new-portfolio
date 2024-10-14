import {
  FaAddressCard,
  FaBriefcase,
  FaConciergeBell,
  FaIdCard,
} from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const AsideBar = ({ isToggle }) => {
  const location = useLocation();  

  const sideList = [
    {
      name: "Home",
      title: <FaHouse />,
      link: "/",
    },
    {
      name: "About",
      title: <FaAddressCard />,
      link: "/about",
    },
    {
      name: "Services",
      title: <FaConciergeBell />,
      link: "/services",
    },
    {
      name: "Portfolio",
      title: <FaBriefcase />,
      link: "/portfolio",
    },
    {
      name: "Contact",
      title: <FaIdCard />,
      link: "/contact",
    },
  ];

  return (
    <aside
      className={`h-screen w-[90px] bg-white flex flex-col z-50 items-center justify-start transition-all shadow-2xl ${
        isToggle ? "fixed top-0 left-0 translate-x-0" : "fixed top-0 -left-80 -translate-x-80"
      } lg:sticky top-0 left-0 lg:translate-x-0 lg:block`}
    >
      <div className="w-full h-10 flex items-center justify-center py-3 bg-[#d9823e] text-white">
        <Link to={"/"} className="text-[15px] text-center font-bold">
          Siddique
        </Link>
      </div>
      <ul className="w-full flex flex-col items-center justify-between">
        {sideList.map((list, ind) => {
          return (
            <li
              key={ind}
              className={`w-full flex items-center justify-center py-4 ${location.pathname === list.link ? "border-r-2 border-r-[#d9823e] border-b-2 border-b-gray-200" : "border-b-2 border-b-gray-200"} ${location.pathname === list.link ? "text-[#d9823e] font-semibold" : "text-black font-semibold"}`}
            >
              <Link
                to={list.link}
                className="flex flex-col items-center text-md font-light transition-all w-full"
              >
                {list.title}
                <span className="mt-1">{list.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideBar;
