import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  // {
  //   title: "Home",
  //   path: "/",
  //   icon: <AiIcons.AiFillHome />,
  //   cName: "nav-text",
  // },
  {
    title: "Articles",
    path: "/articles",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Topics",
    path: "/topics",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];
