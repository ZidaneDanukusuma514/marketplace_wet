import React, { useContext } from "react";
import ProductList from "../component/ProductList";
import { contextUser } from "../context/AuthProvider";

function Home() {
  return (
    <div>
      <ProductList />
    </div>
  );
}

export default Home;
