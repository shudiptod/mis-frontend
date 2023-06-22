import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import DropdownButton from "./DropdownButton";
import { routeLIst } from "@/utils/routeList";

const ButtonList = () => {
  const router = useRouter();
  console.log("🚀 ~ file: ButtonList.js:61 ~ ButtonList ~ router:", router);

  return (
    <div className="w-full mt-4 text-gray-custom flex flex-col gap-2">
      {routeLIst.map((item, index) =>
        item.subSections?.length > 0 ? (
          <DropdownButton key={index} router={router} item={item} />
        ) : (
          <Link
            key={index}
            href={item.route}
            className={`w-full px-4 py-3 flex justify-start gap-3 text-sm ${
              router.asPath === item.route
                ? "bg-active border-l-4 border-blue-active text-blue-active"
                : ""
            }`}
          >
            <Image
              src={
                router.asPath === item.route ? item.logo_selected : item.logo
              }
              alt=""
              width={20}
              height={20}
            />

            <span>{item.title}</span>
          </Link>
        )
      )}
    </div>
  );
};

export default ButtonList;
