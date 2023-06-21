import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(
  claim_no,
  health_facility,
  insuree,
  claimed_date,
  processed_on,
  feedback_status,
  review_status,
  claimed,
  approved,
  status
) {
  return {
    claim_no,
    health_facility,
    insuree,
    claimed_date,
    processed_on,
    feedback_status,
    review_status,
    claimed,
    approved,
    status,
  };
}

const rows = [
  createData(
    150000001,
    "uptol State hospital",
    "Macintyre Joseph (070707070)",
    "1924-06-26",
    "1924-06-26",
    "Not Selected",
    "Not Selected",
    "$150000001",
    "$150000001",
    "Not Selected"
  ),
  createData(
    150000001,
    "uptol State hospital",
    "Macintyre Joseph (070707070)",
    "1924-06-26",
    "1924-06-26",
    "Not Selected",
    "Not Selected",
    "$150000001",
    "$150000001",
    "Not Selected"
  ),
  createData(
    150000001,
    "uptol State hospital",
    "Macintyre Joseph (070707070)",
    "1924-06-26",
    "1924-06-26",
    "Not Selected",
    "Not Selected",
    "$150000001",
    "$150000001",
    "Not Selected"
  ),
  createData(
    150000001,
    "uptol State hospital",
    "Macintyre Joseph (070707070)",
    "1924-06-26",
    "1924-06-26",
    "Not Selected",
    "Not Selected",
    "$150000001",
    "$150000001",
    "Not Selected"
  ),
];

const ReviewsTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1"> Claim No</th>
          <th> Health Facility</th>
          <th>Insuree</th>
          <th> Claimed Date</th>
          <th> Processed On</th>
          <th>Feedback Status</th>
          <th>Review Status</th>
          <th>Claimed</th>
          <th>Approved</th>
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
            <td className="px-1">{item.claim_no}</td>
            <td>{item.health_facility}</td>
            <td>{item.insuree}</td>
            <td>{item.claimed_date}</td>
            <td>{item.processed_on}</td>
            <td>{item.feedback_status}</td>
            <td>{item.review_status}</td>
            <td>{item.claimed}</td>
            <td>{item.approved}</td>
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
        <tr></tr>
      </table>
    </div>
  );
};

export default ReviewsTable;
