import React, { useState } from "react";
import AreasLand from "../Components/Dashboard/Listings/Land/AreasLand";
import DateLand from "../Components/Dashboard/Listings/Land/DateLand";
import CheckBoxAreaLand from "../Components/Dashboard/Listings/Land/CheckBoxAreaLand";
import BasicInfoLand from "../Components/Dashboard/Listings/Land/BasicInfoLand";
import "./Styles/EditDetailsLand.scss";
import DescriptionField from "../Components/Dashboard/Listings/Apartment/DescriptionField";
import { Link } from "react-router-dom";
export default function EditDeatilsLand() {
    const [formData, setFormData] = useState({});
    const {propertyId} = useParams()

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <form onSubmit={handleFormSubmit} className="listings-main">
            <DescriptionField setFormData={setFormData}/>
            <BasicInfoLand setFormData={setFormData} />
            <AreasLand setFormData={setFormData} />
            <DateLand setFormData={setFormData} />
            <CheckBoxAreaLand setFormData={setFormData} />
             <Link to={"/owner/dashboard/listings"}>
                <button className="tile-btn3" type="submit">
                    Submit
                </button>
            </Link>
        </form>
    );
}
