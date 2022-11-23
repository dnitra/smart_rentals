import React, { useEffect, useState } from "react";
import Areas from "../Components/Dashboard/Listings/Apartment/Areas";
import Date from "../Components/Dashboard/Listings/Apartment/Date";
import Energy from "../Components/Dashboard/Listings/Apartment/Energy";
import Other from "../Components/Dashboard/Listings/Apartment/Other";
import BasicInfo from "../Components/Dashboard/Listings/Apartment/BasicInfo";
import CheckBoxArea from "../Components/Dashboard/Listings/Apartment/CheckBoxArea";
import DescriptionField from "../Components/Dashboard/Listings/Apartment/DescriptionField";

export default function Body() {
    const [formData, setFormData] = useState({});

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div onSubmit={handleFormSubmit} className="apartment">
            <BasicInfo setFormData={setFormData} />
            <Areas setFormData={setFormData} />
            <Date setFormData={setFormData} />
            <Other setFormData={setFormData} />
            <Energy setFormData={setFormData} />
            <CheckBoxArea setFormData={setFormData} />
            <DescriptionField setFormData={setFormData}/>
            <button type="submit">Submit</button>
        </div>
    );
}
