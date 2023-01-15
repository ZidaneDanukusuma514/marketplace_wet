import React, { useContext } from "react";
import { ContextCart } from "../context/CartProvider";

function Cart() {
  const { CartItem } = useContext(ContextCart);
  console.log(CartItem);
  return (
    <div className="bg-slate-200 h-screen">
      <div className="flex flex-col rounded-md mt-14 w-[60%] h-[500px] mx-auto bg-white">
        <h1 className="border-b-2 border-black p-2 font-bold text-black/75 text-2xl">
          Keranjang
        </h1>
        <h2 className="p-2">List product didalam keranjang:</h2>
        <div className="flex flex-col">{CartItem}</div>
      </div>
    </div>
  );
}

export default Cart;
