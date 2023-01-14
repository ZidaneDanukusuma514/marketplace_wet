import React, { useContext, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { contextUser } from "../context/AuthProvider";
import { ContextDatabase } from "../context/DatabaseProvider";
function ProductItem({ data }) {
  const [value, setValue] = useState(0);
  const { admin } = useContext(contextUser);
  const { handleDelete } = useContext(ContextDatabase);
  return (
    <div className="flex flex-col relative overflow-hidden rounded-md w-[200px] h-[240px] p-4 border-2 border-black/75">
      {admin ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete(data.id);
          }}
          className="absolute text-white top-0 right-0 p-2 bg-rose-500 hover:bg-rose-600"
        >
          <ImCancelCircle />
        </button>
      ) : null}
      <img
        src={data.img}
        className="max-h-[150px] rounded-md grow"
        alt="image"
      />
      <div className="font-bold">
        <h1 className="float-left">{data.title}</h1>
        <h2 className="float-right">{data.price}</h2>
      </div>
      <p className="truncate ">{data.description}</p>
      {value === 0 ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            setValue(+1);
          }}
          className="rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 "
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
