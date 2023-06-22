import PageSubtitle from "@/components/Common/PageSubtitle/PageSubtitle";
import PageTitle from "@/components/Common/PageTitle/PageTitle";
import React from "react";
import { FaSitemap } from "react-icons/fa";
import SearchCriteria from "./SearchCriteria";
import SearchFields from "./SearchFields";
import TotalDisplay from "@/components/Common/TotalDisplay/TotalDisplay";
import ProductsTable from "./ProductsTable";
const Products = () => {
  return (
    <>
      <PageTitle title={"Administration"} subtitle={"products"} />
      <div className="w-full px-4">
        <PageSubtitle
          title={"products"}
          icon={<FaSitemap className="w-5 h-5 text-sidebar" />}
        />
        <SearchCriteria />
        <SearchFields />
        <TotalDisplay label={"Products"} />
        <ProductsTable />
      </div>
    </>
  );
};

export default Products;
