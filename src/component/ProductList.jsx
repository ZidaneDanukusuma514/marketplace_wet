import React, { useContext, useEffect } from "react";
import { ContextDatabase } from "../context/DatabaseProvider";
import ProductItem from "./ProductItem";

function ProductList() {
  const { handleGetDocs, data } = useContext(ContextDatabase);
  useEffect(() => {
    handleGetDocs();
  }, []);

  return (
    <div className="container mx-auto mt-4 ">
      <div className="grid grid-cols-4 gap-4 justify-items-center">
        {data.map((item, index) => (
          <ProductItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
