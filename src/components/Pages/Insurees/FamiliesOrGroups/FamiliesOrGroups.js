import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalInsurees from "./TotalInsurees";
import InsureesTable from "./InsureesTable";

const FamiliesOrGroups = () => {
  return (
    <div>
      <PageTitle title={"Insurees and Policies"} subtitle={"Families/groups"} />
      <div className="w-full mx-auto px-4">
        <div className="w-full shadow-title rounded-[10px] p-4 bg-white flex justify-start items-center gap-2">
          <MdPeopleOutline className="w-5 h-5 text-sidebar" />
          <span className="text-sidebar font-semibold uppercase tracking-wide">
            families/groups
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

export default FamiliesOrGroups;
