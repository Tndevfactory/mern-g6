import React from "react";
import { Slack, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-2  shadow-lg flex justify-between ">
      <div id="left" className="">
        <Slack className="inline" /> E-store
      </div>
      <div id="right" className="space-x-1">
        <Link to="/" className="text-xs hover:text-blue-600">
          Accueil
        </Link>
        <a href="" className="text-xs hover:text-blue-600">
          Services
        </a>
        <a href="" className="text-xs hover:text-blue-600">
          Produits
        </a>
        <Link to="/contact" className="text-xs hover:text-blue-600">
          Contact
        </Link>
        <Link to="/register" className=" ml-2 text-xs hover:text-blue-600">
          <UserCircle className="inline-block" size={18} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
