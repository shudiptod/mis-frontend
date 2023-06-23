import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import { FaClipboardList } from "react-icons/fa";
import MTPLTable from "./MTPLTable";
const RolesManagement = () => {
  return (
    <>
      <PageTitle title={"Administration"} subtitle={"Roles Management"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"Roles Management"}
          icon={<FaClipboardList className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Roles"} />
        <MTPLTable />
      </div>
    </>
  );
};

export default RolesManagement;
