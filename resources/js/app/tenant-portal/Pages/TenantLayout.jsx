import React from "react";
import { Outlet } from "react-router-dom"
import TenantNavbar from "../Components/TenantNavbar";

export default function TenantLayout() {
    

    return (
        
        <>
            <TenantNavbar />
            <Outlet />
        </>
        
    )
}