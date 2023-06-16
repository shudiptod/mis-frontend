import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import SaveAndReset from "./SaveAndReset";
import IndividualSave from "./IndividualSave";
import { InputLabel, MenuItem, Select } from "@mui/material";
import FamilyGroup from "./FamilyGroup/FamilyGroup";
import HeadInsuree from "./HeadInsuree/HeadInsuree";
import FirstServicePoint from "./FirstServicePoint/FirstServicePoint";

const AddFamilyOrGroup = () => {
  return (
    <>
      <PageTitle
        title={"Insurees and Policies"}
        subtitle={"Add Family or group"}
      />
      <div className="w-full mx-auto px-4">
        <SaveAndReset />
        <div className="w-full flex flex-wrap justify-between items-start mt-5">
          <FamilyGroup />
          <HeadInsuree />
          <FirstServicePoint />
        </div>
      </div>
    </>
  );
};

export default AddFamilyOrGroup;
