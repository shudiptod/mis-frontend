import { Button, Checkbox, IconButton } from "@mui/material";
import React, { useState } from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(id, name, module, description, selected) {
  return {
    id,
    name,
    module,
    description,
    selected,
  };
}

const rows = [
  createData(
    1,
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)",
    false
  ),
  createData(
    2,
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)",
    false
  ),
  createData(
    3,
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)",
    false
  ),
  createData(
    4,
    "150000001",
    "uptol State hospital",
    "Macintyre Joseph (070707070)Macintyre Joseph (070707070)",
    false
  ),
];

const ReportsTable = () => {
  const [data, setData] = useState([...rows]);
  console.log("🚀 ~ file: ReportsTable.js:46 ~ ReportsTable ~ data:", data);
  const [allSelected, setAllSelected] = useState(false);
  console.log(
    "🚀 ~ file: ReportsTable.js:47 ~ ReportsTable ~ allSelected:",
    allSelected
  );
  const toggleAll = () => {
    setData((state) => {
      for (let item of state) {
        item.selected = !allSelected;
      }
      console.log("🚀 ~ file: ReportsTable.js:50 ~ setData ~ state:", state);
      return state;
    });
    setAllSelected((state) => !state);
  };

  const toggleOne = (e, index) => {
    setData((state) => {
      let temp = [...state];
      for (let i = 0; i < temp.length; i++) {
        if (index === state[i]["id"]) {
          temp[i]["selected"] = !temp[i]["selected"];
        }
      }
      return temp;
    });
    console.log(data);
  };

  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <thead>
          <tr className="text-[12px] bg-white  h-16  border-t border-r rounded-[10px]">
            <th className="p-2">Report Name</th>
            <th className="p-2">Module</th>
            <th className="p-2">Description</th>
            <th className="p-2 w-max text-center">
              <Button
                onClick={toggleAll}
                className="w-fit p-2 rounded-md text-white normal-case text-[11px] h-[32px] bg-sky-custom hover:bg-sky-custom"
              >
                {allSelected ? "Unselect" : "Select"}
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={`${item.name}-${item.id}`}
              className="text-[11px] border-t border-r bg-white h-16 w-full text-left p-2"
            >
              <td className="p-2">{item.name}</td>
              <td className="p-2">{item.module}</td>
              <td className="p-2">{item.description}</td>

              <td className=" text-center p-2 flex items-center justify-center">
                <input
                  className="w-4 h-4 text-red-custom"
                  type="checkbox"
                  // {...{ name: `${item.name}-${index}` }}
                  name={`${item.name}-${item.id}`}
                  onChange={(e) => toggleOne(e, item.id)}
                  checked={item.selected}
                />
                <IconButton>
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
