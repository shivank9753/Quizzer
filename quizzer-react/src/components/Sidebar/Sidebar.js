import React from "react";
import { MdQuiz } from "react-icons/md";
import { TbHome2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="@apply flex-[1.25] min-h-[90vh] bg-gradient-to-b from-zinc-100 to-zinc-50 rounded-lg shadow-sm flex flex-col gap-5">
      <div className="h-14 flex justify-start items-center gap-2 p-5">
        <MdQuiz className="text-2xl" />
        <span className="text-lg">Quizzer</span>
      </div>
      <div className="">
        <ul className="p-5 gap-5 flex flex-col">
          <NavLink to="/admin/home">
            {({ isActive }) => (
              <li className="flex items-center cursor-pointer text-lg hover:text-black duration-300">
                <TbHome2
                  className={`${isActive ? "text-black" : "text-zinc-400"}`}
                />
                <span
                  className={`text-sm ml-2 duration-300 ${
                    isActive ? "text-black" : "text-zinc-400"
                  }`}
                >
                  Dashboard
                </span>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/quiz">
            {({ isActive }) => (
              <li className="flex items-center cursor-pointer group">
                <HiOutlineQuestionMarkCircle
                  className={`text-lg group-hover:text-black duration-300 ${
                    isActive ? "text-black" : "text-zinc-400"
                  }`}
                />
                <span
                  className={`text-sm ml-2 text-zinc-400 group-hover:text-black duration-300 ${
                    isActive ? "text-black" : "text-zinc-400"
                  }`}
                >
                  Quiz
                </span>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/category">
            {({ isActive }) => (
              <li className="flex items-center cursor-pointer group">
                <MdOutlineCategory
                  className={`text-lg group-hover:text-black duration-300 ${
                    isActive ? "text-black" : "text-zinc-400"
                  }`}
                />
                <span
                  className={`text-sm ml-2 text-zinc-400 group-hover:text-black duration-300 ${
                    isActive ? "text-black" : "text-zinc-400"
                  }`}
                >
                  Category
                </span>
              </li>
            )}
          </NavLink>
          <NavLink to="/admin/profile">
            {({ isActive }) => (
              <li className="flex items-center cursor-pointer group">
                <AiOutlineUser
                  className={`text-lg group-hover:text-black duration-300 ${
                    isActive ? "text-black" : "text-zinc-400"
                  }`}
                />
                <span
                  className={`text-sm ml-2 text-zinc-400 group-hover:text-black duration-300 ${
                    isActive ? "text-black" : "text-zinc-400"
                  }`}
                >
                  Profile
                </span>
              </li>
            )}
          </NavLink>
        </ul>
      </div>
      <div className="mt-auto">
        <ul className="p-5 gap-5 flex flex-col">
          <li className="flex items-center cursor-pointer group">
            <span className="text-sm ml-2 text-zinc-400 group-hover:text-black duration-300">
              Dashboard
            </span>
          </li>
          <li className="flex items-center cursor-pointer group">
            <span className="text-sm ml-2 text-zinc-400 group-hover:text-black duration-300">
              Dashboard
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
