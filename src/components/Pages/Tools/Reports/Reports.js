import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import { FaClipboardList } from "react-icons/fa";
import MTPLTable from "./ReportsTable";
const Reports = () => {
  return (
    <>
      <PageTitle title={"Tools"} subtitle={"Reports"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"Reports"}
          icon={<FaClipboardList className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Reports"} />
        <MTPLTable />
      </div>
    </>
  );
};

export default Reports;
