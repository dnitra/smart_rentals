import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../bootstrap";
import { useCustomContexts } from "./Context/ContextsProvider";
//imports from home -page
import HomeLayout from "./home-page/Pages/HomeLayout";
import Home from "./home-page/Pages/Home";
import Login from "./home-page/Pages/Login";
import Register from "./home-page/Pages/Register";
import Test from "./home-page/Pages/Test";
import ChoosePortal from "./home-page/Pages/ChoosePortal";
import Invitation from "./home-page/Pages/Invitation";
import PublicListings from "./home-page/Pages/PublicListings";

//imports from owner portal
import OwnerLayout from "./owner-portal/Pages/OwnerLayout";
import AllProperties from "./owner-portal/Pages/AllProperties";
import SelectedPropertyDetails from "../../js/app/owner-portal/Pages/SelectedPropertyDetails";
import AllProperty from "./owner-portal/Components/Dashboard/AllProperty";
import Cashflow from "./owner-portal/Pages/Cashflow";
import Dashboard from "./owner-portal/Pages/Dashboard";
import Listings from "./owner-portal/Pages/Listings";
import Messages from "./owner-portal/Pages/Messages";
import Reports from "./owner-portal/Pages/Reports";
import Properties from "./owner-portal/Pages/Properties";
import EditDetailsApartment from "./owner-portal/Pages/EditDetailsApartment";
import EditDeatilsLand from "./owner-portal/Pages/EditDetailsLand";
import EditDetailsHouse from "./owner-portal/Pages/EditDetailsHouse";
import EditDetailsCommercial from "./owner-portal/Pages/EditDetailsCommercial";
import EditAccesses from "./owner-portal/Pages/EditAccess";
import EditProperty from "./owner-portal/Pages/EditProperty";

//import from tenant portal
import TenantLayout from "./tenant-portal/Pages/TenantLayout";
import TenantDashboard from "./tenant-portal/Pages/TenantDashboard";
import TenantProperties from "./tenant-portal/Pages/TenantPropeties";

export default function App() {
    // state from contexts
    const { user, userData, setUser, changeUserData } = useCustomContexts();

    // get authenticated user and store the user in state
    const getUser = async () => {
        try {
            const res = await axios.get("/api/user");
            const data = res.data;
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        // if there is no user run the function getUser - short-circuiting
        !user && getUser();
        changeUserData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/register/:linkId" element={<Register />} />
                    {/* <Route path="/products" element={<Products />} /> */}
                    <Route path="/choosePortal" element={<ChoosePortal />} />
                    <Route
                        path="/public_listings"
                        element={<PublicListings />}
                    />
                    <Route path="/invite/:linkId" element={<Invitation />} />
                </Route>

                <Route path="/owner" element={<OwnerLayout />}>
                    <Route path="/owner/dashboard" element={<Dashboard />} />
                    <Route
                        path="/owner/dashboard/all"
                        element={<AllProperties />}
                    />

                    <Route
                        path="/owner/dashboard/property/all/:propertyId"
                        element={<SelectedPropertyDetails />}
                    />
                    <Route
                        path="/owner/dashboard/property/all/:propertyId/edit"
                        element={<EditProperty />}
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
                        element={<EditDetailsApartment />}
                    />
                    <Route
                        path="/owner/dashboard/listings/details/land"
                        element={<EditDeatilsLand />}
                    />
                    <Route
                        path="/owner/dashboard/listings/details/house/"
                        element={<EditDetailsHouse />}
                    />
                    <Route
                        path="/owner/dashboard/listings/details/commercial/"
                        element={<EditDetailsCommercial />}
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
                    <Route
                        path="/owner/property/:propertyId/accesses"
                        element={<EditAccesses />}
                    />
                </Route>
                <Route path="/tenant" element={<TenantLayout />}>
                    <Route
                        path="/tenant/dashboard"
                        element={<TenantDashboard />}
                    />
                    <Route
                        path="/tenant/dashboard/all"
                        element={<TenantProperties />}
                    />
                    <Route
                        path="/tenant/dashboard/messages"
                        element={<Messages />}
                    />
                    <Route
                        path="/tenant/dashboard/reports"
                        element={<Reports />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
