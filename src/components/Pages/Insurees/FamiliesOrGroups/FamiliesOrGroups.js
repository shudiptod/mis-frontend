import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { MdPeopleOutline } from "react-icons/md";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalInsurees from "./TotalInsurees";
import InsureesTable from "./InsureesTable";
import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";

const FamiliesOrGroups = () => {
  return (
    <div>
      <PageTitle title={"Insurees and Policies"} subtitle={"Families/groups"} />
      <div className="w-full mx-auto px-4">
        <PageSubtitle
          title={"families/groups"}
          icon={<MdPeopleOutline className="w-5 h-5 text-sidebar" />}
        />

        <SearchCriteria />
        <SearchFields />
        <TotalInsurees />
        <InsureesTable />
      </div>
    </div>
  );
};

export default FamiliesOrGroups;
