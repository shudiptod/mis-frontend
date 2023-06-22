import React from "react";

const CustomCheckBox = ({ label, name }) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <input type="checkbox" name={name} />
      <label className="text-sm text-sidebar font-semibold capitalize">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
