import React from "react";
import { FaDAndD } from "react-icons/fa6";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../lib/constant";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-neutral-900 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FaDAndD fontSize={24} />
        <span className="text-neutral-100 text-lg">OpenShop</span>
      </div>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((link) => (
          <SidebarLink key={link.key} item={link} />
        ))}
      </div>
      <div className="flex">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
          <SidebarLink key={link.key} item={link} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link to={item.path} className="flex items-center gap-2 px-1 py-3">
      {item.icon}
      <span className="text-neutral-100">{item.label}</span>
    </Link>
  );
}
