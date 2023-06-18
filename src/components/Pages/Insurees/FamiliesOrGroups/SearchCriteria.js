import React from "react";

const SearchCriteria = () => {
  return (
    <div className="w-full shadow-title rounded-[10px] p-4 bg-white flex justify-between items-center mt-4">
      <div className="flex items-center gap-2 justify-start">
        <span className="text-sidebar font-medium uppercase tracking-wide">
          Search Criteria
        </span>
      </div>
      <div className="flex items-center gap-2 justify-start">
        <button className="bg-yellow-custom w-[60px] h-[24px] text-xs  rounded-[5px] text-white shadow-md">
          Reset
        </button>
        <button className="bg-sky-custom w-[60px] h-[24px] text-xs  rounded-[5px] text-white shadow-md">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchCriteria;
