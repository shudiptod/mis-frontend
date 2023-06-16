import React from "react";
import IndividualSave from "../IndividualSave";
import { InputLabel, MenuItem, Select } from "@mui/material";

const FamilyGroup = () => {
  return (
    <div className="min-w-[365px] w-[28%] shadow-lg">
      <IndividualSave title={"Family/Group"} />
      <div className="w-full h-[600px] overflow-y-auto bg-white text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
        <Selector name={"region"} title={"Region"} />
        <Selector name={"state"} title={"State"} />
        <Selector name={"lga"} title={"LGA"} />
        <Selector name={"ward"} title={"Ward"} />
        <Selector name={"family_type"} title={"Family Type"} />
        <Selector name={"confirmation_type"} title={"Confirmation Type"} />
        <Selector name={"confirmation_code"} title={"Confirmation Code"} />
        <Selector name={"confirmation_code"} title={"Confirmation Code"} />
        <div>
          <label>Address</label>
          <input
            name="address"
            type="text"
            className="l w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
          />
        </div>
        <div className="flex items-center justify-start gap-4">
          <input type="checkbox" name="poverty_status" />
          <label className="text-sm text-sidebar font-semibold">
            Poverty Status
          </label>
        </div>
      </div>
    </div>
  );
};

export default FamilyGroup;

const Selector = ({ name, title }) => {
  return (
    <div>
      <label className="font-medium">{title}</label>
      <select
        className="w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1 cursor-pointer mt-2"
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
