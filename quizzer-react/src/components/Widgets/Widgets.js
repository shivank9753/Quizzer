import React from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { MdOutlineCategory } from "react-icons/md";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
const Widgets = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = { title: "USERS" };
      break;
    case "test":
      data = { title: "TESTS" };
      break;
    case "question":
      data = { title: "QUESTIONS" };
      break;
    case "category":
      data = { title: "CATEGORY" };
      break;
    default:
      break;
  }
  return (
    <div className="flex flex-1 p-2 justify-between shadow-sm rounded-md h-24 bg-white">
      <div className="flex flex-col justify-between">
        <span className="font-bold text-sm text-gray-400">{data?.title}</span>
        <span className="font-[300] text-2xl">23535</span>
        <span className="border-solid border-b-2 border-b-gray-400">
          See all users
        </span>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex items-center text-sm">
          <BsArrowUpShort />
          20%
        </div>
        {/* <AiOutlineUser className="text-xl p-1 rounded-md self-end" /> */}
        {/* <BsClipboardCheck className="text-xl p-1 rounded-md self-end" /> */}
        {/* <MdOutlineCategory className="text-xl p-1 rounded-md self-end" /> */}
        <HiOutlineQuestionMarkCircle className="text-xl p-1 rounded-md self-end" />
      </div>
    </div>
  );
};

export default Widgets;
