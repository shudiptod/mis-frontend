import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(
  payment_date,
  payer,
  amount,
  payment_type,
  receipt_no,
  contribution_category
) {
  return {
    payment_date,
    payer,
    amount,
    payment_type,
    receipt_no,
    contribution_category,
  };
}

const rows = [
  createData(
    "1924-06-26",
    "Barumida",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Contribution"
  ),
  createData(
    "1924-06-26",
    "Barumida",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Contribution"
  ),
  createData(
    "1924-06-26",
    "Barumida",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Contribution"
  ),
  createData(
    "1924-06-26",
    "Barumida",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Contribution"
  ),
  createData(
    "1924-06-26",
    "Barumida",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Contribution"
  ),
];

const ContributionsTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1">Payment Date</th>
          <th>Payer</th>
          <th>Amount</th>
          <th>Payment Type</th>
          <th>Receipt No.</th>
          <th>Contribution Category</th>

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
            <td className="px-1">{item.payment_date}</td>
            <td>{item.payer}</td>
            <td>{item.amount}</td>
            <td>{item.payment_type}</td>
            <td>{item.receipt_no}</td>
            <td>{item.contribution_category}</td>

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

export default ContributionsTable;
