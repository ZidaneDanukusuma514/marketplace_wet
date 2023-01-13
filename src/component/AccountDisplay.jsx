import React, { useContext } from "react";
import { contextUser } from "../context/AuthProvider";

function AccountDisplay() {
  const { user, handleLogout } = useContext(contextUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogout();
  };
  return (
    <div className="bg-slate-200 rounded-lg px-2">
      <p className="float-left text-sm text-black/75">Account:</p>
      <button
        onClick={handleSubmit}
        className="float-right text-white font-semibold bg-rose-500 hover:bg-rose-600 px-2 text-sm text-black/75"
      >
        logout
      </button>
      <h1 className="text-black/75 hover:text-black font-semibold">
        {user.email}
      </h1>
    </div>
  );
}

export default AccountDisplay;
