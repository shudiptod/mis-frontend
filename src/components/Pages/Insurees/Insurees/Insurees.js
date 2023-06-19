import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import { FaRegUser } from "react-icons/fa";
import SearchFields from "./SearchFields";
import TotalInsurees from "./TotalInsurees";
import InsureesTable from "./InsureesTable";

const Insurees = () => {
  return (
    <div>
      <PageTitle title={"Insurees and Policies"} subtitle={"Insurees"} />
      <div className="w-full px-4">
        <div className="w-full shadow-title rounded-[10px] my-5 p-4 bg-white flex justify-start items-center gap-2">
          <FaRegUser className="w-5 h-5 text-sidebar" />
          <span className="text-sidebar font-semibold uppercase tracking-wide">
            Insurees
          </span>
        </div>
        <SearchCriteria />
        <SearchFields />
        <TotalInsurees />
        <InsureesTable />
      </div>
    </div>
  );
};

export default Insurees;
