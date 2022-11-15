import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../bootstrap";
import Layout from "./Pages/Layout";
import AllProperties from "./Pages/AllProperties";
import Cashflow from "./Pages/Cashflow";
import Dashboard from "./Pages/Dashboard";
import Listings from "./Pages/Listings";
import Messages from "./Pages/Messages";
import Reports from "./Pages/Reports";
import Properties from "./Pages/Properties";
import Property from "./Components/Dashboard/Listings/Property"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/dashboard/all" element={<AllProperties />} />
                    <Route path="/dashboard/cashflow" element={<Cashflow />} />
                    <Route path="/dashboard/listings" element={<Listings />} />
                    <Route path="/dashboard/listings/create" element={<Property />} />
                    <Route path="/dashboard/messages" element={<Messages />} />
                    <Route path="/dashboard/reports" element={<Reports />} />
                    <Route path="/properties" element={<Properties />} />
                </Route>
                {/* move to layout */}
            </Routes>
        </BrowserRouter>
    );
}
