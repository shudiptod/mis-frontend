import Image from "next/image";
import React from "react";

const PageTitle = ({ image, title, subtitle }) => {
  return (
    <div className="px-6 py-7 w-full bg-white shadow-title flex justify-start gap-4 items-center uppercase mb-4">
      {image?.length > 0 ? (
        <Image src={image} alt="" width={30} height={30} />
      ) : (
        <></>
      )}
      <h1 className="text-[30px] leading-[40px] text-sidebar font-bold">
        {title}{" "}
        {subtitle?.length > 0 ? (
          <span className="text-[20px] font-normal leading-7 ">
            / {subtitle}{" "}
          </span>
        ) : (
          <></>
        )}
      </h1>
    </div>
  );
};

export default PageTitle;
