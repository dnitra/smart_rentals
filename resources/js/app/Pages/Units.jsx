import React, { useState } from "react";
import axios from "axios";

export default function Units() {

    const [formData, setFormData] = useState({
        name: "",
        address:""
        
    })
 


    const handleChange = (event) => {
        setFormData((previous_values) => {
            // console.log(event.target.value);
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // make the AJAX request
            const response = await axios.post("/api/unit/store", formData);
            // get the (already JSON-parsed) response data
            const response_data = response.data;
            console.log(response_data);
        } catch (error) {
            // if the response code is not 2xx (success)
            console.log(error);
            // switch (error.response.status) {
            //     case 422:
            //         // handle validation errors here
            //         console.log(
            //             "VALIDATION FAILED:",
            //             error.response.data.errors
            //         );
            //         break;
            //     case 500:
            //         console.log("UNKNOWN ERROR", error.response.data);
            //         break;
            // }
        }
    };
    return (
        <form
            className="unit__form"
            action="/units"
            method="post"
            onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <label htmlFor="name">Address:</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
            />
            <label htmlFor="name">Type:</label>
            <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}>

                <option value="1">
                House
                </option>    
                <option value="2">
                Apartment
                </option>    
                <option value="3">
                Room
                </option>    
            </select>
            <button type="submit">Submit</button>
        </form>
        
    )
}