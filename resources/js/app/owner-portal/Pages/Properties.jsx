import React, { useState } from "react";
import axios from "axios";
import { useCustomContexts } from "../../../app/Context/ContextsProvider";

export default function Properties() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        country: 1,
        city: "",
        type: 1,
    });

    const { theme, content } = useCustomContexts();

    const handleChange = (event) => {
        setFormData((previous_values) => {
            // console.log(event.target.value);
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // make the AJAX request
            const response = await axios.post("/api/property/store", formData);
            // get the (already JSON-parsed) response data
            const response_data = response.data;
            console.log(response_data);
        } catch (error) {
            // if the response code is not 2xx (success)
            // console.log(error);
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
        }
    };
    return (
        <>
            <form
                className="property__form"
                method="post"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                />
                <br />

                <label htmlFor="country">Country:</label>
                <select
                    id="type"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value="57">Czech Republic</option>
                    <option value="191">Slovakia</option>
                    <option value="82">Germany</option>
                </select>
                <br />

                <label htmlFor="address">Street:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor="name">Type:</label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="1">House</option>
                    <option value="2">Apartment</option>
                    <option value="3">Room</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
