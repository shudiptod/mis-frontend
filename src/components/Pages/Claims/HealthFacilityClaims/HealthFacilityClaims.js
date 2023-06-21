import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { BsPostcardHeart } from "react-icons/bs";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import HFCTable from "./HFCTable";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";

const HealthFacilityClaims = () => {
  return (
    <>
      <PageTitle title={"Claims"} subtitle={"Health Facility Claims"} />
      <div className="w-full mx-auto px-4">
        <PageSubtitle
          icon={<BsPostcardHeart className="w-5 h-5 text-sidebar" />}
          title={"Health Facility Claims"}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Claims"} />
        <HFCTable />
      </div>
    </>
  );
};

export default HealthFacilityClaims;
