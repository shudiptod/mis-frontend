import React from "react";

const SearchFields = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start my-5 bg-white rounded-[10px] shadow-lg">
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full   text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <Selector name={"region"} title={"Region"} />
          <Selector name={"state"} title={"State"} />
          <Selector name={"health_facility"} title={"Health Facility"} />
          <Selector
            name={"claim_administrator "}
            title={"Claim Administrator "}
          />
          <Selector name={"claim_status "} title={"Claim Status "} />
          <Selector name={"review_status "} title={"Review Status "} />
          <Selector name={"feedback_status "} title={"Feedback Status "} />
          <CustomTextInput
            type="number"
            name={"random_filter "}
            label={"Random Filter (%)"}
          />
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput name={"claim_no"} label={"Claim No"} />
          <CustomTextInput name={"ins_no"} label={"Insurance No"} />
          <CustomTextInput
            type="number"
            name={"claimed_more_than"}
            label={"Claimed More Than ($)"}
          />
          <CustomTextInput
            type="number"
            name={"claimed_less_than"}
            label={"Claimed Less Than ($)"}
          />
          <CustomTextInput
            type="date"
            name={"visit_date_from"}
            label={"Visit Date From"}
          />
          <CustomTextInput
            type="date"
            name={"visit_date_to"}
            label={"Visit Date To"}
          />
          <Selector name={"medical_service"} title={"Medical Service"} />
          <CustomTextInput
            type="number"
            name={"claimed_amount_above"}
            label={"Claimed Amount Above (%)"}
          />
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput
            type="date"
            name={"claimed_from"}
            label={"Claimed From"}
          />
          <CustomTextInput
            type="date"
            name={"claimed_to"}
            label={"Claimed To"}
          />
          <CustomTextInput
            type="date"
            name={"processed_from"}
            label={"Processed From"}
          />
          <CustomTextInput
            type="date"
            name={"processed_to"}
            label={"Processed To"}
          />
          <Selector name={"medical_item"} title={"Medical Item"} />
          <Selector name={"main_diagnosis"} title={"Main Diagnosis"} />
          <Selector name={"visit_type"} title={"Visit Type"} />
          <CustomTextInput
            type="number"
            name={"claimed_amount_above_diagnosis"}
            label={"Claimed Amount Above Diagnosis Avg (%)"}
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
