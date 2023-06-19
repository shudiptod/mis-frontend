import React from "react";
import IndividualSave from "../IndividualSave";

const HeadInsuree = () => {
  return (
    <div className="min-w-[365px] w-[28%] ">
      <IndividualSave title={"Head Insuree Details"} />
      <div className="w-full h-[600px] overflow-y-auto bg-white text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
        <Selector name={"insurance_no"} title={"Insurance no"} />
        <Selector name={"last_name"} title={"Last name"} />
        <Selector name={"given_name"} title={"Given name"} />
        <CustomTextInput type="date" name={"birthdate"} label={"Birthdate"} />
        <Selector name={"gender"} title={"Gender"} />
        <Selector name={"marital_status"} title={"Marital Status"} />
        <div>
          <label>Ward</label>
          <input
            type="text"
            name="ward"
            className="l w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
          />
        </div>

        <div>
          <label>Address</label>
          <input
            name="address"
            type="text"
            className="l w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            name="phone"
            type="tel"
            className="l w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            className="l w-full outline-none focus:outline-none focus:ring-0 border-b border-black-800/60 py-1"
          />
        </div>
        <Selector name={"profession"} title={"Profession"} />
        <Selector name={"education"} title={"Education"} />
        <Selector name={"id_type"} title={"ID Type"} />
        <Selector name={"identification_no"} title={"Identification No."} />
        <div className="flex items-center justify-start gap-4">
          <input type="checkbox" name="beneficiary_card" />
          <label className="text-sm text-sidebar font-semibold">
            Beneficiary card
          </label>
        </div>
        <div>
          <h3 className="text-[15px] text-sidebar font-semibold">
            Upload Insuree Image
          </h3>
          <div className="flex items-center justify-start gap-4 mt-2">
            <input type="date" name="image_date" />
            <input type="file" name="image" className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadInsuree;

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
