import React from "react";
import { RiChatSettingsLine } from "react-icons/ri";

const SaveAndReset = () => {
  return (
    <div className="w-full shadow-title rounded-[10px] p-4 bg-white flex justify-between items-center">
      <div className="flex items-center gap-2 justify-start">
        <RiChatSettingsLine className="w-5 h-5 text-sidebar" />
        <span className="text-sidebar font-semibold uppercase tracking-wide">
        Batch Runs
        </span>
      </div>
      <div className="flex items-center gap-2 justify-start">
        <button className="bg-yellow-custom w-[60px] h-[24px] text-xs  rounded-[5px] text-white shadow-md">
          Reset
        </button>
        <button className="bg-brand w-[60px] h-[24px] text-xs  rounded-[5px] text-white shadow-md">
          Save All
        </button>
      </div>
    </div>
  );
};

export default SaveAndReset;
