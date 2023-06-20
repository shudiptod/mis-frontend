import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(
  received_date,
  request_date,
  expected_amount,
  received_amount,
  payment_type,
  receipt_no,
  status
) {
  return {
    received_date,
    request_date,
    expected_amount,
    received_amount,
    payment_type,
    receipt_no,
    status,
  };
}

const rows = [
  createData(
    "1924-06-26",
    "1924-06-26",
    "$150000001",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Not Yet Confirmed"
  ),
  createData(
    "1924-06-26",
    "1924-06-26",
    "$150000001",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Not Yet Confirmed"
  ),
  createData(
    "1924-06-26",
    "1924-06-26",
    "$150000001",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Not Yet Confirmed"
  ),
  createData(
    "1924-06-26",
    "1924-06-26",
    "$150000001",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Not Yet Confirmed"
  ),
  createData(
    "1924-06-26",
    "1924-06-26",
    "$150000001",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Not Yet Confirmed"
  ),
  createData(
    "1924-06-26",
    "1924-06-26",
    "$150000001",
    "$150000001",
    "Bank Transfer",
    150000001,
    "Not Yet Confirmed"
  ),
];

const PaymentsTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1">Received Date</th>
          <th>Request Date</th>
          <th>Expected Amount</th>
          <th>Received Amount</th>
          <th>Payment Type</th>
          <th>Receipt No.</th>
          <th>Status</th>

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
            <td className="px-1">{item.received_date}</td>
            <td>{item.request_date}</td>
            <td>{item.expected_amount}</td>
            <td>{item.received_amount}</td>
            <td>{item.payment_type}</td>
            <td>{item.receipt_no}</td>
            <td>{item.status}</td>

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

export default PaymentsTable;
