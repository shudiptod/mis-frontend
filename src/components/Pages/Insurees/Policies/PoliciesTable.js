import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(
  enrollment,
  name,
  effective,
  start,
  expiry,
  product,
  officer,
  type,
  status,
  value,
  balance,
  valid_from,
  valid_to
) {
  return {
    enrollment,
    name,
    effective,
    start,
    expiry,
    product,
    officer,
    type,
    status,
    value,
    balance,
    valid_from,
    valid_to,
  };
}

const rows = [
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "1924-06-26",
    "1924-06-26",
    "1924-06-26",
    "Fixed Cycle Cover Ultha",
    "E00004 Zombie Romby",
    "Renewed Policy",
    "Suspended",
    "Uminalum",
    "$150000001",
    "1500-06-30",
    "1500-06-30"
  ),
];

const PoliciesTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1">Enrollment</th>
          <th>Name</th>
          <th>Effective</th>
          <th>Start</th>
          <th>Expiry</th>
          <th>Product</th>
          <th>Officer</th>
          <th>Type</th>
          <th>Status</th>
          <th>Value</th>
          <th>Balance</th>
          <th>Valid From</th>
          <th>Valid To</th>

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
            <td className="px-1">{item.enrollment}</td>
            <td>{item.name}</td>
            <td>{item.effective}</td>
            <td>{item.start}</td>
            <td>{item.expiry}</td>
            <td>{item.product}</td>
            <td>{item.officer}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
            <td>{item.value}</td>
            <td>{item.balance}</td>
            <td>{item.valid_from}</td>
            <td>{item.valid_to}</td>

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

export default PoliciesTable;
