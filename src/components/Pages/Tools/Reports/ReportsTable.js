import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(name, module, description) {
  return {
    name,
    module,
    description,
  };
}

const rows = [
  createData(
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)"
  ),
  createData(
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)"
  ),
  createData(
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)"
  ),
  createData(
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)"
  ),
];

const ReportsTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <thead>
          <tr className="text-[12px] bg-white  h-16  border-t border-r rounded-[10px]">
            <th className="p-2">Report Name</th>
            <th className="p-2">Module</th>
            <th className="p-2">Description</th>
            <th className="p-2 w-max text-center">
              <span className="w-fit p-2 rounded-md text-white normal-case text-[10px] h-max bg-sky-custom">
                Select
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows?.map((item, index) => (
            <tr
              key={index}
              className="text-[11px] border-t border-r bg-white h-16 w-full text-left p-2"
            >
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.module}</td>
              <td className="p-2">{item.description}</td>

              <td className="w-max text-center p-2">
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
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
