import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(year, month, product, care_type, calculated_date, index) {
  return {
    year,
    month,
    product,
    care_type,
    calculated_date,
    index,
  };
}

const rows = [
  createData(
    2024,
    "December",
    "Fixed Cycle Cover Tahida",
    "In & Out - Patient",
    "2024-06-28",
    "0001"
  ),
  createData(
    2024,
    "December",
    "Fixed Cycle Cover Tahida",
    "In & Out - Patient",
    "2024-06-28",
    "0001"
  ),
  createData(
    2024,
    "December",
    "Fixed Cycle Cover Tahida",
    "In & Out - Patient",
    "2024-06-28",
    "0001"
  ),
  createData(
    2024,
    "December",
    "Fixed Cycle Cover Tahida",
    "In & Out - Patient",
    "2024-06-28",
    "0001"
  ),
  createData(
    2024,
    "December",
    "Fixed Cycle Cover Tahida",
    "In & Out - Patient",
    "2024-06-28",
    "0001"
  ),
  createData(
    2024,
    "December",
    "Fixed Cycle Cover Tahida",
    "In & Out - Patient",
    "2024-06-28",
    "0001"
  ),
];

const BatchRunsTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1">Year</th>
          <th>Month</th>
          <th>Product</th>
          <th>Care Type</th>
          <th>Calculated Date</th>
          <th>Index</th>

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
            <td className="px-1">{item.year}</td>
            <td>{item.month}</td>
            <td>{item.product}</td>
            <td>{item.care_type}</td>
            <td>{item.calculated_date}</td>
            <td>{item.index}</td>

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
        <tr></tr>
      </table>
    </div>
  );
};

export default BatchRunsTable;
