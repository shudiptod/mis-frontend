import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import { FaClipboardList } from "react-icons/fa";
import MTPLTable from "./MTPLTable";
const ContributionPlanBundles = () => {
  return (
    <>
      <PageTitle
        title={"Administration"}
        subtitle={"Contribution Plan Bundles"}
      />
      <div className="w-full px-4">
        <PageSubtitle
          title={"Contribution Plan Bundles"}
          icon={<FaClipboardList className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Contribution Plan Bundles"} />
        <MTPLTable />
      </div>
    </>
  );
};

export default ContributionPlanBundles;
