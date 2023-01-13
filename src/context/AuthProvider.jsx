import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebase";
export const contextUser = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState("");

  const handleSignin = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        setUser(user);
        console.log("Login Success:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Login Error:", errorCode);
        console.log("Login Error:", errorMessage);
      });
  };

  const handleRegister = async ({ email, password }) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        console.log("Register Success: ", user);
      })
      .catch((error) => {
        console.log("Register Error: ", error);
      });
  };

  const handleLogout = async () => {
    await signOut(auth);
    console.log("Logout Clicked");
    setUser(null);
  };

  return (
    <contextUser.Provider
      value={{ user, handleSignin, handleRegister, handleLogout }}
    >
      {children}
    </contextUser.Provider>
  );
}

export default AuthProvider;
