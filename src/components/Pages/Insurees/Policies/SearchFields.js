import React from "react";

const SearchFields = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start my-5 bg-white rounded-[10px] shadow-lg h-[600px] overflow-y-auto">
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full   text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <Selector name={"region"} title={"Region"} />
          <Selector name={"state"} title={"State"} />
          <Selector name={"product"} title={"Product"} />
          <Selector name={"officer"} title={"Officer"} />

          <div className="flex items-center justify-start gap-4">
            <input type="checkbox" name="poverty_status" />
            <label className="text-sm text-sidebar font-semibold capitalize">
              Only with inactive insurees
            </label>
          </div>
          <div className="flex items-center justify-start gap-4">
            <input type="checkbox" name="poverty_status" />
            <label className="text-sm text-sidebar font-semibold capitalize">
              show historical values
            </label>
          </div>
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput
            name={"start_from"}
            label={"Start From"}
            type="date"
          />
          <CustomTextInput name={"start_to"} label={"Start To"} type="date" />
          <CustomTextInput
            name={"effective_from"}
            label={"Effective From"}
            type="date"
          />
          <CustomTextInput
            name={"effective_to"}
            label={"Effective to"}
            type="date"
          />
          <CustomTextInput
            name={"enrollment_from"}
            label={"Enrollment From"}
            type="date"
          />
          <CustomTextInput
            name={"enrollment_to"}
            label={"Enrollment to"}
            type="date"
          />
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <Selector name={"type"} title={"Type"} />
          <Selector name={"status"} title={"Status"} />
          <CustomTextInput
            type="number"
            name={"balance_under"}
            label={"Balance Under ($)"}
          />
          <CustomTextInput
            type="number"
            name={"balance_above"}
            label={"Balance Above ($)"}
          />
          <CustomTextInput name={"phone"} label={"Phone"} />
          <CustomTextInput
            type="date"
            name={"expiry_from"}
            label={"Expiry From"}
          />
          <CustomTextInput type="date" name={"expiry_to"} label={"Expiry To"} />
        </div>
      </div>
    </div>
  );
};

export default SearchFields;

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

const CustomTextInput = ({ label, name, type = "text" }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        className="l w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
      />
    </div>
  );
};
