import {
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from "firebase/firestore";
import React, { createContext, useState } from "react";
import { CollectionDb, db } from "../firebase/firebase";
export const ContextDatabase = createContext(null);
export default function DatabaseProvider({ children }) {
  const [data, setData] = useState([]);

  const handleGetDocs = async () => {
    const collectionRef = query(CollectionDb);
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      let value = [];
      snapshot.forEach((doc) => {
        value.push({ ...doc.data(), id: doc.id });
      });
      setData(value);
    });
    return () => unsubscribe();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  const handleAddDocs = async ({ title, description, price, amount, img }) => {
    await addDoc(CollectionDb, {
      title: title,
      description: description,
      price: price,
      amount: amount,
      img: img,
    }).then((doc) => {
      console.log("add data: ", doc);
    });
  };

  const handleUpdateDocs = async ({
    id,
    title,
    description,
    price,
    amount,
  }) => {
    const selectedUpdate = doc(db, "items", id);
    await updateDoc(selectedUpdate, {
      title: title,
      description: description,
      price: price,
      amount: amount,
    });
  };
  return (
    <ContextDatabase.Provider
      value={{
        data,
        handleGetDocs,
        handleUpdateDocs,
        handleAddDocs,
        handleDelete,
      }}
    >
      {children}
    </ContextDatabase.Provider>
  );
}
