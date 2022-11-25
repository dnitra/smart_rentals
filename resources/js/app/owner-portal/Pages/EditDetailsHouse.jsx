import React, { useEffect, useState } from "react";
import AreasHouse from "../Components/Dashboard/Listings/House/AreasHouse";
import DateHouse from "../Components/Dashboard/Listings/House/DateHouse";
import EnergyHouse from "../Components/Dashboard/Listings/House/EnergyHouse";
import OtherHouse from "../Components/Dashboard/Listings/House/OtherHouse";
import BasicInfoHouse from "../Components/Dashboard/Listings/House/BasicInfoHouse";
import CheckBoxAreaHouse from "../Components/Dashboard/Listings/House/CheckBoxAreaHouse";
import DescriptionField from "../Components/Dashboard/Listings/Apartment/DescriptionField";
// import "../Components/Dashboard/Listings/House/PropertyHouse.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Body() {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log(formData)
    },[formData])
    const {propertyId} = useParams()
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(propertyId)
        try {
            console.log(formData)
            const response = await axios.post(`/api/property/storeListingsDetails/${propertyId}`,  formData )
            console.log(response)
            console.log("form sent")
        }
        catch (error) {
            console.log(error)
        }

    };

    return (
        <form onSubmit={handleFormSubmit} className="listings-main">
            <DescriptionField setFormData={setFormData}/>
            <BasicInfoHouse setFormData={setFormData} />
            <AreasHouse setFormData={setFormData} />
            <DateHouse setFormData={setFormData} />
            <OtherHouse setFormData={setFormData} />
            <EnergyHouse setFormData={setFormData} />
            <CheckBoxAreaHouse setFormData={setFormData} />
                <button className="tile-btn3" type="submit">
                    Submit
                </button>
        </form>
    );
}
