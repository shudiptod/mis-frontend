import React from "react";
import { GoBell, GoMail } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
const Links = () => {
  return (
    <div className="w-max py-1 pr-5 lg:flex items-center justify-between gap-8 hidden text-center text-black">
      <div className="w-max relative">
        <h6 className="w-5 h-5 absolute -top-1 -right-1  flex justify-center items-center  overflow-hidden rounded-full bg-red-custom text-white text-xs">
          10
        </h6>
        <GoMail color="white" className="w-[40px] h-[40px] " />
      </div>
      <div className="w-max relative">
        <h6 className="w-5 h-5 absolute -top-1 -right-1  flex justify-center items-center  overflow-hidden rounded-full bg-red-custom text-white text-xs">
          10
        </h6>
        <IoNotificationsOutline color="white" className="w-[40px] h-[40px] " />
      </div>
      <div className="w-max relative">
        <BsSearch color="white" className="w-[40px] h-[40px] " />
      </div>
      <div className="w-max relative">
        <HiOutlineUserCircle color="white" className="w-[40px] h-[40px] " />
      </div>
    </div>
  );
};

export default Links;
