import React from "react";
import { Slack, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="p-2  shadow-lg flex justify-between ">
      <div id="left" className="">
        <Menu className="inline" />
      </div>
      <div id="right" className="space-x-1 flex justify-center items-center">
        <span>Bonjour Admin, </span>
        <Link to="/register" className=" ml-2 text-xs hover:text-blue-600">
          <UserCircle className="inline-block" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
