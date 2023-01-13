import React, { useState } from "react";

function ProductItem({ data }) {
  const [value, setValue] = useState(0);
  return (
    <div className="flex flex-col rounded-md w-[200px] p-4 border-2 border-black/75">
      <img
        src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        className="bg-cover rounded-md grow"
        alt="image"
      />
      <div className="font-bold">
        <h1 className="float-left">title</h1>
        <h2 className="float-right">price</h2>
      </div>
      <p>description</p>
      {value === 0 ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setValue(+1);
          }}
          className="grow rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 "
        >
          add to cart
        </button>
      ) : (
        <div className="flex  border-2 justify-evenly items-center">
          <button
            onClick={(e) => {
              setValue(value - 1);
            }}
            className="grow bg-rose-500"
          >
            -
          </button>
          <p className="px-2">{value}</p>
          <button
            onClick={(e) => {
              setValue(value + 1);
            }}
            className="grow bg-green-500"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
