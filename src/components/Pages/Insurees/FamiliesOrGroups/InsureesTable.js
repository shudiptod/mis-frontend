import { Button, Checkbox, IconButton } from "@mui/material";
import React from "react";
import { BsWindowStack } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { ImBin } from "react-icons/im";
function createData(
  head_ins_no,
  head_last_name,
  head_given_name,
  head_email,
  head_phone,
  head_birth_date,
  region,
  state,
  lga,
  ward,
  poverty_status,
  confirmation_no,
  valid_from,
  valid_to
) {
  return {
    head_ins_no,
    head_last_name,
    head_given_name,
    head_email,
    head_phone,
    head_birth_date,
    region,
    state,
    lga,
    ward,
    poverty_status,
    confirmation_no,
    valid_from,
    valid_to,
  };
}

const rows = [
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
  createData(
    150000001,
    "Barumida",
    "Alan",
    "Barumida@gmail.com",
    19246137416144,
    "1924-06-26",
    "Ultha",
    "Jambero",
    "Remorlogy",
    "Uminalum",
    true,
    1500,
    "1500-06-30",
    "1500-06-30"
  ),
];

const InsureesTable = () => {
  return (
    <div className="w-full my-16">
      <table className="w-full table-auto text-left gap-2 ">
        <tr className="text-[11px] bg-white rounded-full h-10  border-t border-r ">
          <th>Head Insurance No</th>
          <th>Head Last Name</th>
          <th>Head Given Name</th>
          <th>Head Email</th>
          <th>Head Phone</th>
          <th>Head Birth Date</th>
          <th>Region</th>
          <th>State</th>
          <th>LGA</th>
          <th>Ward</th>
          <th>Poverty Status</th>
          <th>Confirm No</th>
          <th>Valid From</th>
          <th>Valid To</th>
          <th>Detail</th>
          <th>
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
            <td>{item.head_ins_no}</td>
            <td>{item.head_last_name}</td>
            <td>{item.head_given_name}</td>
            <td>{item.head_email}</td>
            <td>{item.head_phone}</td>
            <td>{item.head_birth_date}</td>
            <td>{item.region}</td>
            <td>{item.state}</td>
            <td>{item.lga}</td>
            <td>{item.ward}</td>
            <td className="p-2">
              <input
                type="checkbox"
                defaultChecked={item.poverty_status ? true : false}
              />
            </td>
            <td>{item.confirmation_no}</td>
            <td>{item.valid_from}</td>
            <td>{item.valid_to}</td>
            <td className="">
              <IconButton>
                <BsWindowStack className="w-4 h-4 text-blue-dark" />
              </IconButton>
            </td>
            <td>
              <IconButton>
                {" "}
                <FiEdit className="w-4 h-4 text-blue-dark" />
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
