import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../home-page/Components/HomePage/Footer";
import HomePageNavbar from "../Components/HomePage/HomePageNavbar";

const HomeLayout = () => {
  return (
    <>
      <HomePageNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;