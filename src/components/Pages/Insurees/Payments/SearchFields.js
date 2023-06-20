import React from "react";

const SearchFields = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start my-5 bg-white rounded-[10px] shadow-lg ">
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full   text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <Selector name={"payment_type"} title={"Payment Type"} />
          <Selector name={"status"} title={"Status"} />
          <CustomTextInput name={"receipt_no"} label={"Receipt No"} />
          <div className="flex items-center justify-start gap-4">
            <input type="checkbox" name="show_reconciled" />
            <label className="text-sm text-sidebar font-semibold capitalize">
              Show Reconciled Only
            </label>
          </div>
          <div className="flex items-center justify-start gap-4">
            <input type="checkbox" name="show_historical" />
            <label className="text-sm text-sidebar font-semibold capitalize">
              show historical values
            </label>
          </div>
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput
            name={"request_date_from"}
            label={"Request Date From"}
            type="date"
          />
          <CustomTextInput
            name={"request_date_to"}
            label={"Request Date To"}
            type="date"
          />
          <CustomTextInput
            name={"received_date_from"}
            label={"Received Date From"}
            type="date"
          />
          <CustomTextInput
            name={"received_date_to"}
            label={"Received Date to"}
            type="date"
          />
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput
            type="number"
            name={"balance_above"}
            label={"Expected Balance Above ($)"}
          />
          <CustomTextInput
            type="number"
            name={"balance_under"}
            label={"Expected Balance Under ($)"}
          />

          <CustomTextInput
            type="number"
            name={"received_above"}
            label={"Received Balance Above ($)"}
          />
          <CustomTextInput
            type="number"
            name={"received_under"}
            label={"Received Balance Under ($)"}
          />
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
