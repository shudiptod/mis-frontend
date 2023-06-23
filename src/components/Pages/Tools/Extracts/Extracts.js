import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { LuMonitorDown } from "react-icons/lu";
import ExtractsTable from "./ExtractsTable";

const Extracts = () => {
  return (
    <>
      <PageTitle title={"Tools"} subtitle={"Extracts"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"Extracts"}
          icon={<LuMonitorDown className="w-5 h-5 text-sidebar" />}
        />
        <ExtractsTable />
      </div>
    </>
  );
};

export default Extracts;
