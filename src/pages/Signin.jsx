import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextUser } from "../context/AuthProvider";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleSignin } = useContext(contextUser);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignin({ email: email, password: password });
    navigate("/");
  };

  return (
    <div className="mx-auto mt-[150px] p-4 border border-slate-500/75 rounded-md w-[500px]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  space-y-4"
        action=""
      >
        <input
          className="border-2 px-2 text-lg"
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          className="border-2 px-2 text-lg"
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button className="bg-green-500 " type="submit">
          Signin
        </button>
        <p>
          Create your Account here{" "}
          <span>
            <Link className="font-semibold text-green-700" to={"/register"}>
              register
            </Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
}

export default Signin;
