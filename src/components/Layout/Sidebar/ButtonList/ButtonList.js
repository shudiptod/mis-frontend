import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import DropdownButton from "./DropdownButton";

const sectionData = [
  {
    title: "Dashboard",
    logo: "/images/button-list/dashboard.svg",
    logo_selected: "/images/button-list/dashboard-selected.svg",
    route: "/",
  },
  {
    title: "Insurees and Policies",
    logo: "/images/button-list/insuree.svg",
    logo_selected: "/images/button-list/insuree-selected.svg",
    route: "/insurees-and-policies",
    subSections: [
      { title: "Add Family/Group", route: "/add-family-or-group" },
      {
        title: "Families/Groups",
        route: "/families-or-groups",
      },
      {
        title: "Insurees",
        route: "/insurees",
      },
      {
        title: "Policies",
        route: "/policies",
      },
    ],
  },
  {
    title: "Claims",
    logo: "/images/button-list/claim.svg",
    logo_selected: "/images/button-list/claim-selected.svg",
    route: "/claims",
  },
  {
    title: "Administration",
    logo: "/images/button-list/admin.svg",
    logo_selected: "/images/button-list/admin-selected.svg",
    route: "/administration",
  },
  {
    title: "Tools",
    logo: "/images/button-list/tools.svg",
    logo_selected: "/images/button-list/tools-selected.svg",
    route: "tools",
  },
  {
    title: "Legal & Finance",
    logo: "/images/button-list/legal.svg",
    logo_selected: "/images/button-list/legal-selected.svg",
    route: "legal-and-finances",
  },
];

const ButtonList = () => {
  const router = useRouter();
  console.log("🚀 ~ file: ButtonList.js:61 ~ ButtonList ~ router:", router);
  const [current, setCurrent] = useState();

  return (
    <div className="w-full mt-4 text-gray-custom flex flex-col gap-2">
      {sectionData.map((item, index) =>
        item.subSections?.length > 0 ? (
          <DropdownButton key={index} router={router} item={item} />
        ) : (
          <Link
            key={index}
            href={item.route}
            className={`w-full px-4 py-3 flex justify-start gap-6 text-sm ${
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
