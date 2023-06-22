import CustomCheckBox from "@/components/Common/CustomCheckBox/CustomCheckBox";
import CustomTextInput from "@/components/Common/CustomTextInput/CustomTextInput";
import Selector from "@/components/Common/Selector/Selector";
import React from "react";

const SearchFields = () => {
  return (
    <div className="w-full flex flex-wrap justify-between items-start my-5 bg-white rounded-[10px] shadow-lg ">
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full   text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput name={"code"} label={"Code"} />
          <CustomTextInput name={"name"} label={"Name"} />

          <CustomCheckBox
            name={"show_historical_values"}
            label={"show historical values"}
          />
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <Selector name={"region"} title={"Region"} />
          <Selector name={"state"} title={"State"} />
        </div>
      </div>
      <div className="min-w-[360px] w-[28%] ">
        <div className="w-full  text-black-800 mt-5 rounded-[10px] p-4 text-[15px] flex flex-col gap-4 ">
          <CustomTextInput type="date" name={"date_from"} label={"Date From"} />
          <CustomTextInput type="date" name={"date_to"} label={"Date To"} />
        </div>
      </div>
    </div>
  );
};

export default SearchFields;
