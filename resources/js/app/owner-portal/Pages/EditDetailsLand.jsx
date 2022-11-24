import React, { useState } from "react";
import AreasLand from "../Components/Dashboard/Listings/Land/AreasLand";
import DateLand from "../Components/Dashboard/Listings/Land/DateLand";
import CheckBoxAreaLand from "../Components/Dashboard/Listings/Land/CheckBoxAreaLand";
import BasicInfoLand from "../Components/Dashboard/Listings/Land/BasicInfoLand";
import "./Styles/EditDetailsLand.scss";
import DescriptionField from "../Components/Dashboard/Listings/Apartment/DescriptionField";
export default function EditDeatilsLand() {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div onSubmit={handleFormSubmit} className="listings-main">
            <DescriptionField setFormData={setFormData}/>
            <BasicInfoLand setFormData={setFormData} />
            <AreasLand setFormData={setFormData} />
            <DateLand setFormData={setFormData} />
            <CheckBoxAreaLand setFormData={setFormData} />
            <button className="tile-btn3" type="submit">
                Submit
            </button>
        </div>
    );
}
