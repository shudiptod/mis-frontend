import React from "react";
import IndividualSave from "../IndividualSave";
import { InputLabel, MenuItem, Select } from "@mui/material";

const Accounts = () => {
  return (
    <div className="max-w-[365px] w-[28%] ">
      <IndividualSave title={"First Service point"} />
      <div className="w-full h-[600px] overflow-y-auto bg-white text-black-800 mt-5 shadow-lg rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
        <Selector name={"region"} title={"Region"} />
        <Selector name={"state"} title={"State"} />
        <Selector
          name={"health_facility_level"}
          title={"Health Facility Level"}
        />
        <Selector name={"health_facility"} title={"Health Facility"} />
        <Selector name={"group_by"} title={"Group By"} />
        <CustomTextInput label={"Date From"} name={"date_from"} type="date" />
        <CustomTextInput label={"Date To"} name={"date_to"} type="date" />
        <Selector name={"product"} title={"Product"} />
        <Selector name={"batch_run"} title={"Batch Run (National)"} />
      </div>
    </div>
  );
};

export default Accounts;

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

const CustomTextInput = ({ label, name, type = "text" }) => {
  return (
    <div className="mt-1">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        className="capitalize w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
      />
    </div>
  );
};
