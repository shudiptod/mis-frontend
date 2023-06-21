import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SaveAndReset from "./SaveAndReset";
import LaunchBatchRun from "./LaunchBatchRun/LaunchBatchRun";
import RelativeIndexes from "./RelativeIndexes/RelativeIndexes";
import Accounts from "./Accounts/Accounts";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import BatchRunsTable from "./BatchRunsTable";

const BatchRuns = () => {
  return (
    <>
      <PageTitle title={"Claims"} subtitle={"Batch Runs"} />
      <div className="w-full mx-auto px-4">
        <SaveAndReset />
        <div className="w-full flex flex-wrap justify-between items-start mt-5">
          <LaunchBatchRun />
          <RelativeIndexes />
          <Accounts />
        </div>
        <TotalDisplay label={"Relative Indexes"} />
        <BatchRunsTable />
      </div>
    </>
  );
};

export default BatchRuns;
