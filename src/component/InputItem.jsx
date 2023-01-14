import React, { useContext, useState } from "react";
import { ContextDatabase } from "../context/DatabaseProvider";

function InputItem() {
  const { handleAddDocs } = useContext(ContextDatabase);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddDocs({
      title: title,
      description: description,
      price: price,
      amount: amount,
      img: img,
    });
  };
  return (
    <form onSubmit={handleSubmit} className="flex mx-auto container border-2">
      <input
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Title Here"
        name=""
        id=""
      />
      <input
        className="grow"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="Description here"
        name=""
        id=""
      />
      <input
        onChange={(e) => {
          setImg(e.target.value);
        }}
        type="text"
        placeholder="ImgUrl here"
        name=""
        id=""
      />
      <input
        onChange={(e) => {
          setAmount(e.target.value);
        }}
        type="number"
        placeholder="Amount here"
        name=""
        id=""
      />
      <input
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        type="number"
        placeholder="Price here"
        name=""
        id=""
      />
      <button className="px-2 text-white font-semibold" type="submit">
        Add
      </button>
    </form>
  );
}

export default InputItem;
