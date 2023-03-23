import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";

const AdminLayout = () => {
  return (
    <div className="p-5 bg-[#E4E4E4] h-screen">
      <div className="flex gap-5">
        <Sidebar />
        <div className="@apply flex-[6]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
