import React, { useEffect, useState } from "react";
import AreasHouse from "../Components/Dashboard/Listings/Commercial/AreasHouse";
import DateHouse from "../Components/Dashboard/Listings/Commercial/DateHouse";
import EnergyHouse from "../Components/Dashboard/Listings/Commercial/EnergyHouse";
import OtherHouse from "../Components/Dashboard/Listings/Commercial/OtherHouse";
import BasicInfoHouse from "../Components/Dashboard/Listings/Commercial/BasicInfoHouse";
import CheckBoxAreaHouse from "../Components/Dashboard/Listings/Commercial/CheckBoxAreaHouse";
// import "../Components/Dashboard/Listings/Commercial/PropertyHouse.css";

export default function Body() {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div onSubmit={handleFormSubmit} className="commercial">
            <BasicInfoHouse setFormData={setFormData} />
            <AreasHouse setFormData={setFormData} />
            <DateHouse setFormData={setFormData} />
            <OtherHouse setFormData={setFormData} />
            <EnergyHouse setFormData={setFormData} />
            <CheckBoxAreaHouse setFormData={setFormData} />
            <button type="submit"></button>
        </div>
    );
}
