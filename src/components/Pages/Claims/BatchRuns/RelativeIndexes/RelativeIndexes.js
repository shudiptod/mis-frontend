import React from "react";

const RelativeIndexes = () => {
  return (
    <div className="min-w-[365px] w-[28%] ">
      <div className="w-full bg-white rounded-[10px] shadow-title p-4 flex justify-between items-center">
        <span className="text-sidebar font-semibold">Relative Indexes</span>
        <div className="flex items-center justify-end gap-2">
          <button className="bg-yellow-custom w-[50px] h-[24px] text-xs  rounded-[5px] text-white shadow-md">
            Reset
          </button>
          <button className="bg-sky-custom w-[50px] h-[24px] text-xs  rounded-[5px] text-white shadow-md">
            Search
          </button>
        </div>
      </div>
      <div className="w-full h-[600px] overflow-y-auto bg-white text-black-800 mt-5 shadow-lg rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
        <Selector name={"type"} title={"Type"} />
        <Selector name={"year"} title={"Year"} />
        <Selector name={"month"} title={"Month"} />
        <Selector name={"region"} title={"Region"} />
        <Selector name={"state"} title={"State"} />
        <Selector name={"product"} title={"Product"} />
        <CustomTextInput name={"care_type"} label={"Care Type"} />

        <div className="flex items-center justify-start gap-4">
          <input type="checkbox" name="beneficiary_card" />
          <label className="text-sm text-sidebar font-semibold capitalize">
            show claims
          </label>
        </div>
      </div>
    </div>
  );
};

export default RelativeIndexes;

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
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        className=" w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
      />
    </div>
  );
};
