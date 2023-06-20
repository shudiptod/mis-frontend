import React from "react";

const PageSubtitle = ({ title, icon }) => {
  return (
    <div className="w-full shadow-title rounded-[10px] p-4 bg-white flex justify-start items-center gap-2">
      {icon}
      <span className="text-sidebar font-semibold uppercase tracking-wide">
        {title}
      </span>
    </div>
  );
};

export default PageSubtitle;
