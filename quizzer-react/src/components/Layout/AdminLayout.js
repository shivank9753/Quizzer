import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";

const AdminLayout = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="@apply flex-[6]">
          <Navbar />
          <div className="flex p-5 gap-5">
            <Widgets />
            <Widgets />
            <Widgets />
            <Widgets />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
