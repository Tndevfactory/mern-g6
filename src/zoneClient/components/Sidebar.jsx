import React from "react";
import { UserCheck } from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      <div id="title" className="text-2xl uppercase text-center p-2">
        Zone Utilisateur
      </div>
      <div id="link" className="mt-6 p-2">
        <a href="" className="flex items-center mb-2">
          <UserCheck size={21} className="inline-block mr-1" />
          Gestion profile
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
