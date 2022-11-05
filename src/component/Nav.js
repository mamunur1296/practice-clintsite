import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Nav = () => {
  const { user, logout } = useContext(AuthContext);
  const handallogOut = () => {
    logout()
      .then((res) => {})
      .catch((error) => {});
  };
  return (
    <div className="text-xl ">
      <Link className="mx-5" to="/">
        post
      </Link>
      <Link className="mx-5" to="/login">
        Login
      </Link>
      <Link onClick={handallogOut} className="mx-5">
        <button>Log Out</button>
      </Link>
      <Link to="/display">display</Link>
      <Link className="mx-5" to="/orders">
        Orders
      </Link>
      <Link className="mx-5">{user?.email}</Link>
    </div>
  );
};

export default Nav;
