import React, { useEffect, useState } from "react";
import AreasCommercial from "../Components/Dashboard/Listings/Commercial/AreasCommercial";
import DateCommercial from "../Components/Dashboard/Listings/Commercial/DateCommercial";
import EnergyCommercial from "../Components/Dashboard/Listings/Commercial/EnergyCommercial";
import OtherCommercial from "../Components/Dashboard/Listings/Commercial/OtherHouse";
import BasicInfoCommercial from "../Components/Dashboard/Listings/Commercial/BasicInfoCommercial";
import CheckBoxAreaCommercial from "../Components/Dashboard/Listings/Commercial/CheckBoxAreaCommercial";
import DescriptionField from "../Components/Dashboard/Listings/Apartment/DescriptionField";
import { Link } from "react-router-dom";
// import "../Components/Dashboard/Listings/Commercial/PropertyHouse.css";

export default function Body() {
    const [formData, setFormData] = useState({});
    const {propertyId} = useParams()

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleFormSubmit} className="listings-main">
            <DescriptionField setFormData={setFormData}/>
            <BasicInfoCommercial setFormData={setFormData} />
            <AreasCommercial setFormData={setFormData} />
            <DateCommercial setFormData={setFormData} />
            <OtherCommercial setFormData={setFormData} />
            <EnergyCommercial setFormData={setFormData} />
            <CheckBoxAreaCommercial setFormData={setFormData} />
            <Link to={"/owner/dashboard/listings"}>
                <button className="tile-btn3" type="submit">
                    Submit
                </button>
            </Link>
        </form>
    );
}
