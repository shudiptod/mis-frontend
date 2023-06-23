import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import { FaClipboardList } from "react-icons/fa";
import MTPLTable from "./MTPLTable";
const Users = () => {
  return (
    <>
      <PageTitle title={"Administration"} subtitle={"users"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"users"}
          icon={<FaClipboardList className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"users"} />
        <MTPLTable />
      </div>
    </>
  );
};

export default Users;
