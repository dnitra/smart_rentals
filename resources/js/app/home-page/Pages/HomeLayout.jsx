import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../home-page/Components/HomePage/Footer";
import Navbar from "../../home-page/Components/HomePage/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;