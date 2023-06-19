import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { BiDollar } from "react-icons/bi";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";

const Contributions = () => {
  return (
    <>
      <PageTitle title={"Insurees and Policies"} subtitle={"contributions"} />
      <div className="px-4 w-full">
        <PageSubtitle
          title={"contributions"}
          icon={<BiDollar className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Contributions"} />
      </div>
    </>
  );
};

export default Contributions;
