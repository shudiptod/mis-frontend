import Image from "next/image";
import Link from "next/link";
import React from "react";

const DropdownLinks = ({ title, route, subs }) => {
  return (
    <div className="w-max group ">
      <Link className="flex justify-start gap-1 items-center " href={route}>
        {title}
        <Image
          src="/images/common/dropdown.svg"
          alt="dropdown"
          width={8}
          height={8}
        />
      </Link>
      {subs?.length > 0 ? (
        <div className="fixed top-6 -ml-2 w-max  hidden  group-hover:flex flex-col pt-4  divide-y divide-gray-theme    bg-transparent ">
          {subs?.map((sub, index) => (
            <Link
              key={index}
              className=" bg-white bg-opacity-80 w-full text-left py-2 px-4 border border-gray-100 shadow drop-shadow"
              href={route + sub.route}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default DropdownLinks;
