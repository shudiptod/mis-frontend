import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { HiUserGroup } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
function createData(
  ins_no,
  last_name,
  given_name,
  email,
  phone,
  marital_status,
  gender,
  birth_date,
  region,
  state,
  lga,
  ward,
  valid_from
) {
  return {
    ins_no,
    last_name,
    given_name,
    email,
    phone,
    marital_status,
    gender,
    birth_date,
    region,
    state,
    lga,
    ward,
    valid_from,
  };
}

const rows = [
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "Married",
    "Male",
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    "1500-06-30"
  ),
];

const InsureesTable = () => {
  return (
    <div className="w-full my-5">
      <table className="w-full table-auto text-left  ">
        <tr className="text-[11px] bg-white  h-10  border-t border-r rounded-[10px]">
          <th className="px-1"> Insurance No</th>
          <th> Last Name</th>
          <th> Given Name</th>
          <th> Email</th>
          <th> Phone</th>
          <th> Marital Status</th>
          <th>Gender</th>
          <th> Birth Date</th>
          <th>Region</th>
          <th>State</th>
          <th>LGA</th>
          <th>Ward</th>
          <th>Valid From</th>
          <th>Insuree Family</th>
          <th>Profile</th>
          <th>Detail</th>
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
            <td className="px-1">{item.ins_no}</td>
            <td>{item.last_name}</td>
            <td>{item.given_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.marital_status}</td>
            <td>{item.gender}</td>
            <td>{item.birth_date}</td>
            <td>{item.region}</td>
            <td>{item.state}</td>
            <td>{item.lga}</td>
            <td>{item.ward}</td>
            <td>{item.valid_from}</td>
            <td className="w-max text-center">
              <IconButton>
                <HiUserGroup className="w-4 h-4 text-sidebar" />
              </IconButton>
            </td>
            <td className="">
              <IconButton>
                <CgProfile className="w-4 h-4 text-yellow-button" />
              </IconButton>
            </td>
            <td className="">
              <IconButton>
                <BsWindowStack className="w-4 h-4 text-blue-dark" />
              </IconButton>
            </td>
            <td>
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

export default InsureesTable;
