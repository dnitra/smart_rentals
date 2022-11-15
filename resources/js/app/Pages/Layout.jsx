import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/HomePage/Footer";
import Navbar from "../Components/HomePage/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;