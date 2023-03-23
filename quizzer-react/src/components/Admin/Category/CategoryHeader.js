import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import AddCategory from "./AddCategory";

const CategoryHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-5 p-2 bg-white rounded-md shadow-sm flex justify-between items-center">
      <h1 className="ml-2 font-bold">Category</h1>
      <button
        className="px-4 py-2 m-3 rounded-full transition-all duration-500 bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400 bg-size-200 bg-pos-0 hover:bg-pos-100 flex items-center"
        onClick={() => setShow(true)}
      >
        <GrAddCircle className="mr-2 text-xl" />
        <span className="text-sm">Add Category</span>
      </button>
      <AddCategory show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default CategoryHeader;
