import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(
  display_name,
  location,
  legal_form,
  activity_code,
  date_valid_from,
  date_valid_to
) {
  return {
    display_name,
    location,
    legal_form,
    activity_code,
    date_valid_from,
    date_valid_to,
  };
}

const rows = [
  createData(
    "IL01 Insight",
    "R1 Ultha R1D1 Rapta R1D1M1 Achi R1D1M1V1 Rachla",
    "Limited Risk Company",
    "industry",
    "1924-06-26",
    "1924-06-26"
  ),
  createData(
    "IL01 Insight",
    "R1 Ultha R1D1 Rapta R1D1M1 Achi R1D1M1V1 Rachla",
    "Limited Risk Company",
    "industry",
    "1924-06-26",
    "1924-06-26"
  ),
  createData(
    "IL01 Insight",
    "R1 Ultha R1D1 Rapta R1D1M1 Achi R1D1M1V1 Rachla",
    "Limited Risk Company",
    "industry",
    "1924-06-26",
    "1924-06-26"
  ),
  createData(
    "IL01 Insight",
    "R1 Ultha R1D1 Rapta R1D1M1 Achi R1D1M1V1 Rachla",
    "Limited Risk Company",
    "industry",
    "1924-06-26",
    "1924-06-26"
  ),
  createData(
    "IL01 Insight",
    "R1 Ultha R1D1 Rapta R1D1M1 Achi R1D1M1V1 Rachla",
    "Limited Risk Company",
    "industry",
    "1924-06-26",
    "1924-06-26"
  ),
  createData(
    "IL01 Insight",
    "R1 Ultha R1D1 Rapta R1D1M1 Achi R1D1M1V1 Rachla",
    "Limited Risk Company",
    "industry",
    "1924-06-26",
    "1924-06-26"
  ),
];

const PolicyHoldersTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1">Display Name</th>
          <th>Location</th>
          <th>Legal Form</th>
          <th>Activity Code</th>
          <th>Date Valid From</th>
          <th>Date Valid To</th>

          <th className="w-max text-center">
            <span className="w-fit p-2 rounded-md text-white normal-case text-[10px] h-max bg-sky-custom">
              Update
            </span>
          </th>
        </tr>
        {rows?.map((item, index) => (
          <tr
            key={index}
            className="text-[10px] border-t border-r bg-white h-10 w-full"
          >
            <td className="px-1">{item.display_name}</td>
            <td>{item.location}</td>
            <td>{item.legal_form}</td>
            <td>{item.activity_code}</td>
            <td>{item.date_valid_from}</td>
            <td>{item.date_valid_to}</td>

            <td className="w-max text-center">
              <IconButton>
                {" "}
                <FiEdit className="w-4 h-4 text-sky-custom" />
              </IconButton>
              <IconButton>
                {" "}
                <ImBin className="w-4 h-4 text-red-custom" />
              </IconButton>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PolicyHoldersTable;
