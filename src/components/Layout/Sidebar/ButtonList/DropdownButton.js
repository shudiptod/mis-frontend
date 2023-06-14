import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
const DropdownButton = ({ router, item }) => {
  const [drop, setDrop] = useState(false);

  function toggleDropdown() {
    setDrop((state) => !state);
  }

  return (
    <>
      <button
        onClick={toggleDropdown}
        className={`w-full px-3 py-3 flex justify-start items-center gap-3 text-sm ${
          router.pathname.includes(item.route)
            ? "bg-active border-l-4 border-blue-active text-blue-active"
            : ""
        }`}
      >
        <Image
          src={
            router.pathname.includes(item.route)
              ? item.logo_selected
              : item.logo
          }
          alt=""
          width={20}
          height={20}
        />

        <span>{item.title}</span>
        <IoCaretDownOutline className="justify-self-end" />
      </button>
      {drop === true && (
        <div className="flex flex-col gap-2 items-start pl-10">
          {item.subSections?.map((sub, index) => (
            <Link
              href={item.route + sub.route}
              key={index}
              className={`text-xs ${
                router.asPath === item.route + sub.route
                  ? " text-blue-active/100"
                  : ""
              }`}
            >
              - {sub.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default DropdownButton;
