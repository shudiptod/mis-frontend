import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { GrDocumentText } from "react-icons/gr";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalPolicies from "./TotalPolicies";
import PoliciesTable from "./PoliciesTable";
const Policies = () => {
  return (
    <>
      <PageTitle title={"Insurees and Policies"} subtitle={"Policies"} />
      <div className="px-4 w-full">
        <PageSubtitle
          title="policies"
          icon={<GrDocumentText className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalPolicies />
        <PoliciesTable />
      </div>
    </>
  );
};

export default Policies;
