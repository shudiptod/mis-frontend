import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const NavSearch = () => {
  const [searchMode, setSearchMode] = useState(false);
  const toggleSearchMode = () => {
    setSearchMode((state) => !state);
  };
  return (
    <div
      className={`w-3/12  py-2 flex justify-end items-center relative ${
        searchMode && "border-l border-blue-primary"
      }`}
    >
      <input
        className={`w-full border-none outline-none px-2 placeholder:text-xs text-xs font-semibold placeholder:text-blue-primary ${
          searchMode ? "block" : "hidden"
        }`}
        placeholder="Search"
        type="text"
      />
      <button
        className=" w-[17px] h-[17px] absolute right-2"
        onClick={toggleSearchMode}
      >
        {searchMode ? (
          <AiOutlineClose
            width={17}
            height={17}
            className="text-blue-secondary text-xl"
          />
        ) : (
          <BiSearchAlt2
            width={17}
            height={17}
            className="text-gray-600 text-2xl"
          />
        )}
      </button>
    </div>
  );
};

export default NavSearch;
