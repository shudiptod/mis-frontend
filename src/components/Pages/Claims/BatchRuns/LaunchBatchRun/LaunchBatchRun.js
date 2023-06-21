import React from "react";
import IndividualSave from "../IndividualSave";

const LaunchBatchRun = () => {
  return (
    <div className="min-w-[365px] w-[28%] shadow-lg">
      <IndividualSave title={"Launch Batch Run"} />
      <div className="w-full h-[600px] overflow-y-auto bg-white text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
        <Selector name={"region"} title={"Region"} />
        <Selector name={"state"} title={"State"} />
        <Selector name={"year"} title={"Year"} />
        <Selector name={"month"} title={"Month"} />
      </div>
    </div>
  );
};

export default LaunchBatchRun;

const Selector = ({ name, title }) => {
  return (
    <div>
      <label className="font-medium">{title}</label>
      <select
        className="w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1 cursor-pointer mt-1"
        name={name}
      >
        <option className="py-4 border-0" value={""}></option>
        <option className="py-4 border-0" value={""}>
          1
        </option>
        <option className="py-4 border-0" value={""}>
          2
        </option>
        <option className="py-4 border-0" value={""}>
          3
        </option>
      </select>
    </div>
  );
};
