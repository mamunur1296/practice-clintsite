import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
