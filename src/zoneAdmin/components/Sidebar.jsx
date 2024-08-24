import React from "react";
import { Box, BarChart4, UserCog } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      <div id="title" className="text-2xl uppercase text-center p-2">
        Administration
      </div>
      <div id="link" className="mt-6 p-2">
        <a href="" className="flex items-center mb-2">
          <BarChart4 size={21} className="inline-block mr-1" />
          Dashboard
        </a>
        <a href="" className="flex items-center mb-2">
          <Box size={21} className="inline-block mr-1" />
          Gestion produits
        </a>
        <a href="" className="flex items-center mb-2">
          <UserCog size={21} className="inline-block mr-1" />
          Gestion Utilisateurs
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
