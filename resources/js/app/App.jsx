import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../bootstrap";

//imports from home -page
import HomeLayout from "./home-page/Pages/HomeLayout";
import Home from "./home-page/Pages/Home";
import Login from "./home-page/Pages/Login";
import Register from "./home-page/Pages/Register";
import Test from "./home-page/Pages/Test";

//imports from owner portal
import OwnerLayout from "./owner-portal/Pages/OwnerLayout";
import AllProperties from "./owner-portal/Pages/AllProperties";
import Cashflow from "./owner-portal/Pages/Cashflow";
import Dashboard from "./owner-portal/Pages/Dashboard";
import Listings from "./owner-portal/Pages/Listings";
import Messages from "./owner-portal/Pages/Messages";
import Reports from "./owner-portal/Pages/Reports";
import Properties from "./owner-portal/Pages/Properties";
import Property from "./owner-portal/Components/Dashboard/Listings/Property";
import EditDeatilsLand from "./owner-portal/Pages/EditDeatilsLand";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/test" element={<Test />} />
                </Route>
                <Route path="/owner" element={<OwnerLayout />}>
                    <Route path="/owner/dashboard" element={<Dashboard />} />
                    <Route
                        path="/owner/dashboard/all"
                        element={<AllProperties />}
                    />
                    <Route
                        path="/owner/dashboard/cashflow"
                        element={<Cashflow />}
                    />
                    <Route
                        path="/owner/dashboard/listings"
                        element={<Listings />}
                    />
                    <Route
                        path="/owner/dashboard/listings/details/apartment"
                        element={<Property />}
                    />
                    <Route
                        path="/owner/dashboard/listings/details/land"
                        element={<EditDeatilsLand />}
                    />
                    <Route
                        path="/owner/dashboard/messages"
                        element={<Messages />}
                    />
                    <Route
                        path="/owner/dashboard/reports"
                        element={<Reports />}
                    />
                    <Route path="/owner/properties" element={<Properties />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
