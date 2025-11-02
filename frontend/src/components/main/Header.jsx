import React from "react";
import { FiLogOut, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 sm:p-6">
      <h1 className="text-[#AF6FBF] font-extrabold text-lg sm:text-xl">
        MemoEasy
      </h1>
      <div className="flex items-center gap-3">
        <div className="flex items-center border rounded-lg px-2 py-1">
          <FiSearch className="text-[#AF6FBF]" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm ml-1 w-20 sm:w-40"
          />
        </div>
        <FiLogOut className="text-[#AF6FBF] text-xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
