import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import HealthFacilitiesTable from "./MSPLTable";
import { FaClipboardList } from "react-icons/fa";
const MedicalServicesPriceLists = () => {
  return (
    <>
      <PageTitle
        title={"Administration"}
        subtitle={"medical services price lists"}
      />
      <div className="w-full px-4">
        <PageSubtitle
          title={"medical services price lists"}
          icon={<FaClipboardList className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"medical services price lists"} />
        <HealthFacilitiesTable />
      </div>
    </>
  );
};

export default MedicalServicesPriceLists;
