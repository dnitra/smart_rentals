import React, { useEffect, useState } from "react";
import AreasHouse from "../Components/Dashboard/Listings/House/AreasHouse";
import DateHouse from "../Components/Dashboard/Listings/House/DateHouse";
import EnergyHouse from "../Components/Dashboard/Listings/House/EnergyHouse";
import OtherHouse from "../Components/Dashboard/Listings/House/OtherHouse";
import BasicInfoHouse from "../Components/Dashboard/Listings/House/BasicInfoHouse";
import CheckBoxAreaHouse from "../Components/Dashboard/Listings/House/CheckBoxAreaHouse";
// import "../Components/Dashboard/Listings/House/PropertyHouse.css";

export default function Body() {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div onSubmit={handleFormSubmit} className="house">
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
