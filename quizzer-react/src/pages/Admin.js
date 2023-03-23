import React from "react";
import Widgets from "../components/Widgets/Widgets";

const Admin = () => {
  return (
    <>
      <div className="flex pt-5 gap-5">
        <Widgets type="test" />
        <Widgets type="user" />
        <Widgets type="question" />
        <Widgets type="category" />
      </div>
      <div className="mt-5 p-2 bg-white rounded-lg shadow-sm">Admin</div>
    </>
  );
};

export default Admin;
