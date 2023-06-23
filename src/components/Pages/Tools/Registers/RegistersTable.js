import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDownload } from "react-icons/ai";
import Selector from "@/components/Common/Selector/Selector";
function createData(title) {
  return {
    title,
  };
}

const rows = [
  createData("diagnoses"),
  createData("Locations"),
  createData("health facilities"),
  createData("insurees"),
  createData("medical items"),
  createData("medical services"),
];

const RegistersTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full  text-left table-registers">
        <thead>
          <tr className="">
            <th>Title</th>
            <th>Select Strategy</th>
            <th>Choose File</th>
            <th className="w-max text-center">Dry Run</th>
            <th className="w-max text-center">
              <Button className="w-fit p-2 rounded-md text-black-800 normal-case text-[10px] h-[24px] bg-gray-upload hover:bg-gray-upload">
                Upload All
              </Button>
            </th>
            <th>Select Format</th>

            <th className="w-max text-center">
              <Button className="w-fit p-2 rounded-md text-white normal-case text-[10px] h-[24px] bg-black-800 hover:bg-black-800">
                Download All
              </Button>
            </th>
          </tr>
        </thead>

        <tbody>
          {rows?.map((item, index) => (
            <tr key={index} className="">
              <td className="capitalize">{item.title}</td>
              <td>
                <select className="w-full focus:ring-0 focus:outline-none underline underline-offset-2">
                  <option>Insert</option>
                  <option>Select</option>
                  <option>Delete</option>
                </select>
              </td>
              <td>
                <div className="w-full flex justify-center">
                  <input type="file" />
                </div>
              </td>
              <td className="w-max ">
                <div className="w-full flex justify-center">
                  <input type="checkbox" className="h-4 w-4 mx-auto" />
                </div>
              </td>

              <td className="w-max text-center">
                <IconButton>
                  <AiOutlineDownload className="w-5 h-5 text-black-800 rotate-180" />
                </IconButton>
              </td>
              <td className="w-max text-center">
                <select className="w-full focus:ring-0 focus:outline-none underline underline-offset-2">
                  <option>XLSX</option>
                  <option>CSV</option>
                </select>
              </td>
              <td className="w-max text-center">
                <IconButton>
                  {" "}
                  <AiOutlineDownload className="w-5 h-5 text-black-800" />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistersTable;
