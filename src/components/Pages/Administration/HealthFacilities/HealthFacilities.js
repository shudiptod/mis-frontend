import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import HealthFacilitiesTable from "./HealthFacilitiesTable";
import { MdHealthAndSafety } from "react-icons/md";
const HealthFacilities = () => {
  return (
    <>
      <PageTitle title={"Administration"} subtitle={"health facilities"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"health facilities"}
          icon={<MdHealthAndSafety className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Products"} />
        <HealthFacilitiesTable />
      </div>
    </>
  );
};

export default HealthFacilities;
