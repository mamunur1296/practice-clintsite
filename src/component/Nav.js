import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="text-xl ">
      <Link className="mx-5" to="/">
        post
      </Link>
      <Link to="/display">display</Link>
      <Link></Link>
    </div>
  );
};

export default Nav;
