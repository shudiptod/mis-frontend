import React from "react";

const SearchFields = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start my-5 bg-white rounded-[10px] shadow-lg max-h-[600px] overflow-y-auto">
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full   text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <Selector name={"region"} title={"Region"} />
          <Selector name={"state"} title={"State"} />
          <Selector name={"lga"} title={"lga"} />
          <Selector name={"Ward"} title={"Ward"} />
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
            name={"payment_date_from"}
            label={"Payment Date From"}
            type="date"
          />
          <CustomTextInput
            name={"payment_date_to"}
            label={"Payment Date To"}
            type="date"
          />
          <Selector name={"payer"} title={"Payer"} />
          <Selector name={"payment_type"} title={"Payment Type"} />
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
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
          <Selector
            name={"contribution_category"}
            title={"Contribution Category"}
          />

          <CustomTextInput name={"receipt_no"} label={"Receipt No."} />
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
