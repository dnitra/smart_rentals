import React, { useState } from "react";
import axios from "axios";
import "./Register.scss";
import googleLogo from "../../../img/logos/google_logo.svg";
import facebookLogo from "../../../img/logos/facebook_logo.svg";
import registerImg from "../../../img/others/register-img.png";

function Register() {
    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "default",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // make the AJAX request
            const response = await axios.post("/register", formValues);
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

    const handleChange = (event) => {
        setFormValues((previous_values) => {
            // console.log(event.target.value);
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    console.log(formValues);

    return (
        <div className="register-section">
            <div className="register-container">
                <h3 className="register__heading-form">Registration</h3>

                <form
                    className="register__form"
                    action="/register"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="register__form-item"
                        type="text"
                        placeholder="First Name"
                        name="first_name"
                        value={formValues.first_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="register__form-item"
                        type="text"
                        placeholder="Last Name"
                        name="last_name"
                        value={formValues.last_name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="register__form-item"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="register__form-item"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                    <input
                        className="register__form-item"
                        type="password"
                        placeholder="Confirm Password"
                        name="password_confirmation"
                        value={formValues.password_confirmation}
                        onChange={handleChange}
                    />
                    <select
                        className="register__form-item"
                        name="role"
                        // defaultValue={"default"}
                        value={formValues.role}
                        onChange={handleChange}
                    >
                        <option value="default" disabled>
                            Select your role
                        </option>
                        <option name="manager" value="manager">
                            Manager
                        </option>
                        <option name="manager" value="landlord">
                            Landlord
                        </option>
                        <option name="manager" value="tenant">
                            Tenant
                        </option>
                    </select>

                    <div className="register__logo-social">
                        <img
                            src={facebookLogo}
                            className="register__logo-item"
                            alt="smart rentals logo"
                        />
                        <img
                            src={googleLogo}
                            className="register__logo-item"
                            alt="smart rentals logo"
                        />
                    </div>

                    <button className="register__form-btn" type="submit">
                        Register
                    </button>
                </form>
            </div>

            <div className="register__img">
                <h3 className="register__heading register__heading-img">
                    Overview of all your properties
                </h3>
                <img
                    className="register__img-item"
                    src={registerImg}
                    alt="image of smart rentals app"
                />
            </div>
        </div>
    );
}

export default Register;
