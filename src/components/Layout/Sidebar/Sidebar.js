import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonList from "./ButtonList/ButtonList";

const Sidebar = () => {
  return (
    <div className="">
      <div className="bg-brand w-full py-6 px-8 flex justify-start gap-5 items-center">
        <Image src={"/images/user.svg"} alt="" width={42} height={42} />
        <h1 className="text-[18px] font-bold text-white block uppercase">
          Welcome <br /> Admin
        </h1>
      </div>
      <ButtonList />
    </div>
  );
};

export default Sidebar;
