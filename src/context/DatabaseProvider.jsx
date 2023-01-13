import { addDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
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

  const handleAddDocs = async ({
    title,
    description,
    price,
    amount,
    img_url,
  }) => {
    await addDoc(CollectionDb, {
      title: title,
      description: description,
      price: price,
      amount: amount,
      img: img_url,
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
    <ContextDatabase.Provider value={{ data }}>
      {children}
    </ContextDatabase.Provider>
  );
}
