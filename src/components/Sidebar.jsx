import React from "react";
import logo from "../images/logo2.png";
import { FaCommentAlt, FaTh, FaThList, FaUserAlt } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaThList />,
    },
    {
      path: "/feedback",
      name: "Feedback",
      icon: <MdFeedback />,
    },
    {
      path: "/chatbox",
      name: "Chatbox",

      icon: <FaCommentAlt />,
    },
  ];

  const location = useLocation();

  return (
    <div className="flex">
      <div className="bg-black text-white h-screen w-52 transition-all duration-500">
        <div className="flex items-center justify-center p-5">
          <img className="h-16 w-20 " src={logo} alt="Logo" />
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="flex text-white p-4 px-5 gap-4 transition-all duration-500 hover:bg-white hover:text-black"
            activeClassName="bg-[#618ABA] text-black"
          >
            <div className="text-2xl">{item.icon}</div>
            <div className="text-2xl">{item.name}</div>
          </NavLink>
        ))}
      </div>

      <main className="p-8 w-full bg-gray-100 min-h-screen">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={500}
          >
            {children}
          </CSSTransition>
        </TransitionGroup>
      </main>
    </div>
  );
};

export default Sidebar;
