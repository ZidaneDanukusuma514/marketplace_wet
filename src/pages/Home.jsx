import React, { useContext } from "react";
import AdminMode from "../component/AdminMode";
import InputItem from "../component/InputItem";
import ProductList from "../component/ProductList";
import { contextUser } from "../context/AuthProvider";

function Home() {
  const { admin } = useContext(contextUser);
  return (
    <div>
      {admin ? (
        <AdminMode>
          <h1 className="text-center font-bold text-white pb-2">Admin Mode</h1>
          <InputItem />
        </AdminMode>
      ) : null}
      <ProductList />
    </div>
  );
}

export default Home;
