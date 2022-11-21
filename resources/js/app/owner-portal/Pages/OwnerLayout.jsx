import React from "react";
import { Outlet } from "react-router-dom";
import OwnerNavbar from "../Components/OwnerNavbar";

const OwnerLayout = () => {
  return (
    <>
      <OwnerNavbar />
      <Outlet />
    </>
  );
};

export default OwnerLayout;