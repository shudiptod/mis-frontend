import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import { FaRegUser } from "react-icons/fa";
import SearchFields from "./SearchFields";
import TotalInsurees from "./TotalInsurees";
import InsureesTable from "./InsureesTable";
import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";

const Insurees = () => {
  return (
    <div>
      <PageTitle title={"Insurees and Policies"} subtitle={"Insurees"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"Insurees"}
          icon={<FaRegUser className="w-5 h-5 text-sidebar" />}
        />

        <SearchCriteria />
        <SearchFields />
        <TotalInsurees />
        <InsureesTable />
      </div>
    </div>
  );
};

export default Insurees;
