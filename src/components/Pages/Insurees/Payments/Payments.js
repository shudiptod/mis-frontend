import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { MdPayment } from "react-icons/md";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import PaymentsTable from "./PaymentsTable";

const Payments = () => {
  return (
    <>
      <PageTitle title={"Insurees and Policies"} subtitle={"payment"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"Payments"}
          icon={<MdPayment className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Payment"} />
        <PaymentsTable />
      </div>
    </>
  );
};

export default Payments;
