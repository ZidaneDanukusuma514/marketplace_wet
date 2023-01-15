import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { contextUser } from "../context/AuthProvider";
import AccountDisplay from "./AccountDisplay";

function Header() {
  const { user } = useContext(contextUser);
  return (
    <header className="flex items-center justify-between px-4 border-b-2 border-sky-500 py-4">
      <h1 className="font-bold text-2xl">Marketplace</h1>
      <nav>
        <ul className="flex items-center space-x-4">
          <li className="font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-black/75"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to={"/catalog"}
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-black/75"
              }
            >
              Catalog
            </NavLink>
          </li>
          <li className="font-semibold">
            <NavLink
              to={"/cart"}
              className={({ isActive }) =>
                isActive ? "text-green-500 font-bold" : "text-black/75"
              }
            >
              Cart
            </NavLink>
          </li>
          {!user ? (
            <NavLink
              to={"/signin"}
              className={` ${({ isActive }) =>
                isActive
                  ? "text-green-500 font-bold"
                  : "text-black/75"} hover:text-white hover:bg-green-500 border-2 border-green-500 p-2 rounded-md font-semibold`}
            >
              Sign in
            </NavLink>
          ) : (
            <AccountDisplay />
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
