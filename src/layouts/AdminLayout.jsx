import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../zoneAdmin/components/Navbar";
import Sidebar from "../zoneAdmin/components/Sidebar";

const AdminLayout = () => {
  return (
    <div className=" h-screen flex">
      <div id="left-part" className="bg-gray-100 border basis-[15rem]">
        <Sidebar />
      </div>
      <div id="right-part" className=" flex-1">
        <div>
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
