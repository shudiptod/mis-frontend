import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full h-full">
      <PageTitle
        image={"/images/button-list/dashboard.svg"}
        title={"Dashboard"}
      />
    </div>
  );
};

export default Dashboard;
