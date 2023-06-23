import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { LuMonitorDown } from "react-icons/lu";
import RegistersTable from "./RegistersTable";

const Registers = () => {
  return (
    <>
      <PageTitle title={"Tools"} subtitle={"registers"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"registers"}
          icon={<LuMonitorDown className="w-5 h-5 text-sidebar" />}
        />
        <RegistersTable />
      </div>
    </>
  );
};

export default Registers;
