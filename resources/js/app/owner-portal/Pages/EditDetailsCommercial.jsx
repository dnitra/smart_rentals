import React, { useEffect, useState } from "react";
import AreasCommercial from "../Components/Dashboard/Listings/Commercial/AreasCommercial";
import DateCommercial from "../Components/Dashboard/Listings/Commercial/DateCommercial";
import EnergyCommercial from "../Components/Dashboard/Listings/Commercial/EnergyCommercial";
import OtherCommercial from "../Components/Dashboard/Listings/Commercial/OtherCommercial";
import BasicInfoCommercial from "../Components/Dashboard/Listings/Commercial/BasicInfoCommercial";
import CheckBoxAreaCommercial from "../Components/Dashboard/Listings/Commercial/CheckBoxAreaCommercial";
// import "../Components/Dashboard/Listings/Commercial/PropertyHouse.css";

export default function Body() {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div onSubmit={handleFormSubmit} className="commercial">
            <BasicInfoCommercial setFormData={setFormData} />
            <AreasCommercial setFormData={setFormData} />
            <DateCommercial setFormData={setFormData} />
            <OtherCommercial setFormData={setFormData} />
            <EnergyCommercial setFormData={setFormData} />
            <CheckBoxAreaCommercial setFormData={setFormData} />
            <button type="submit"></button>
        </div>
    );
}
