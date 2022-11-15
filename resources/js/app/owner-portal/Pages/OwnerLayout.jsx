import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const OwnerLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default OwnerLayout;