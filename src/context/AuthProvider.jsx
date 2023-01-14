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
  const [admin, setAdmin] = useState(false);

  const handleSignin = async ({ email, password }) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
        setUser(user);
        if (user.email === "zidaneketz@gmail.com") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
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
    setAdmin(false);
  };

  return (
    <contextUser.Provider
      value={{ user, admin, handleSignin, handleRegister, handleLogout }}
    >
      {children}
    </contextUser.Provider>
  );
}

export default AuthProvider;
