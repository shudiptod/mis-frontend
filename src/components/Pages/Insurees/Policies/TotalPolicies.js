import React from "react";

const TotalPolicies = () => {
  return (
    <div className="w-full shadow-title rounded-[10px] p-4 bg-white flex justify-between items-center mt-4">
      <div className="flex items-center gap-2 justify-start">
        <span className="text-sidebar font-medium uppercase tracking-wide">
          Total Policies Found - 200
        </span>
      </div>
      <div className="flex items-center gap-2 justify-start text-sidebar text-[15px]">
        <span>Display</span>
        <select className="p-1 border border-brand focus:outline-none ">
          <option>10</option>
          <option>20</option>
          <option>30</option>
        </select>
        <span>Records Per Page</span>
      </div>
    </div>
  );
};

export default TotalPolicies;
