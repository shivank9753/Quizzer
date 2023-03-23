import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchTab = () => {
  return (
    <div
      id="search"
      className="flex items-center p-2 bg-[#f5f5f5] rounded-full"
    >
      <AiOutlineSearch className="text-gray-400 text-xl mr-2" />
      <input
        type="search"
        placeholder="Search"
        className="border-none outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchTab;
