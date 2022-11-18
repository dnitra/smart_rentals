import React from "react";
import { Outlet } from "react-router-dom"
import HomePageNavbar from "../../home-page/Components/HomePage/HomePageNavbar";

export default function TenantLayout() {
    

    return (
        
        <>
            <HomePageNavbar />
            <Outlet />
        </>
        
    )
}