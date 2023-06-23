import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(name, date, region, state, valid_from, valid_to) {
  return {
    name,
    date,
    region,
    state,
    valid_from,
    valid_to,
  };
}

const rows = [
  createData(
    "BCTA0001",
    "2024-08-29",
    "R2 - Tahida",
    "mambero",
    "2024-08-29",
    "1924-06-26"
  ),
  createData(
    "BCTA0001",
    "2024-08-29",
    "R2 - Tahida",
    "mambero",
    "2024-08-29",
    "1924-06-26"
  ),
  createData(
    "BCTA0001",
    "2024-08-29",
    "R2 - Tahida",
    "mambero",
    "2024-08-29",
    "1924-06-26"
  ),
];

const MTPLTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1">Name</th>
          <th>Date</th>
          <th>Region</th>
          <th>State</th>
          <th>Valid From</th>
          <th>Valid To</th>
          <th className="w-max text-center">Detail</th>

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
            <td className="px-1">{item.name}</td>
            <td>{item.date}</td>
            <td>{item.region}</td>
            <td>{item.state}</td>
            <td>{item.valid_from}</td>
            <td>{item.valid_to}</td>
            <td className="w-max text-center">
              <IconButton>
                <BsWindowStack className="w-4 h-4 text-blue-dark" />
              </IconButton>
            </td>
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

export default MTPLTable;
