import React from "react";

const SearchFields = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start my-5 bg-white rounded-[10px] shadow-lg ">
      <div className="min-w-[365px] w-[28%] ">
        <div className="w-full h-[600px] overflow-y-auto  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <Selector name={"region"} title={"Region"} />
          <Selector name={"state"} title={"State"} />
          <Selector name={"lga"} title={"LGA"} />
          <Selector name={"ward"} title={"Ward"} />
          <Selector name={"poverty_status"} title={"Family Type"} />
          <CustomTextInput name={"confirmation_no"} label={"Confirmation No"} />
          <Selector name={"officer"} title={"Officer"} />

          <div className="flex items-center justify-start gap-4">
            <input type="checkbox" name="poverty_status" />
            <label className="text-sm text-sidebar font-semibold capitalize">
              show historical values
            </label>
          </div>
        </div>
      </div>
      <div className="min-w-[365px] w-[28%] ">
        <div className="w-full h-[600px] overflow-y-auto  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput name={"head_ins_no"} label={"Head Ins No"} />
          <CustomTextInput name={"head_last_name"} label={"Head Last Name"} />
          <CustomTextInput name={"head_given_name"} label={"Head Given Name"} />
          <Selector name={"head_gender"} title={"Head Gender"} />
          <CustomTextInput
            name={"head_phone"}
            label={"Head Phone"}
            type="tel"
          />
          <CustomTextInput
            name={"head_email"}
            label={"Head Email"}
            type="email"
          />
          <CustomTextInput
            type="date"
            name={"head_birth_from"}
            label={"Head Birth From"}
          />
          <CustomTextInput
            type="date"
            name={"head_birth_to"}
            label={"Head Birth To"}
          />
        </div>
      </div>
      <div className="min-w-[365px] w-[28%] ">
        <div className="w-full h-[600px] overflow-y-auto  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput name={"member_ins_no"} label={"Member Ins No"} />
          <CustomTextInput
            name={"member_last_name"}
            label={"Member Last Name"}
          />
          <CustomTextInput
            name={"member_given_name"}
            label={"Member Given Name"}
          />
          <Selector name={"member_gender"} title={"Member Gender"} />
          <CustomTextInput
            name={"member_phone"}
            label={"Member Phone"}
            type="tel"
          />
          <CustomTextInput
            name={"member_email"}
            label={"Member Email"}
            type="email"
          />
          <CustomTextInput
            type="date"
            name={"member_birth_from"}
            label={"Member Birth From"}
          />
          <CustomTextInput
            type="date"
            name={"member_birth_to"}
            label={"Member Birth To"}
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
