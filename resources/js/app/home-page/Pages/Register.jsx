import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Register_Login.scss";
import googleLogo from "../../../../img/logos/google_logo.svg";
import facebookLogo from "../../../../img/logos/facebook_logo.svg";
import registerImg from "../../../../img/others/register-img.png";
import InputForm from "../../home-page/Components/InputForm/InputForm";
import { useCustomContexts } from "../../Context/ContextsProvider";
import { loadUser } from "../../actions/auth";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Register() {
    const { user, setUser, loadingUser, content, changeUserData } =
        useCustomContexts();

    // setting values from the form
    const [formValues, setFormValues] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
        rented_property_id: null,
        rented_property_user_role_id: null,

        // role: "default",
    });

    const { linkId } = useParams();

    useEffect(() => {
        loadProperty();
    }, []);
    const loadProperty = async () => {
        const response = await axios.get(`/api/invite/${linkId}`);
        const data = response.data;
        setFormValues({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            rented_property_id: data.rented_property_id,
            rented_property_user_role_id: data.rented_property_user_role_id,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // make the AJAX request
            const response = await axios.post("/register", formValues);
            // get the (already JSON-parsed) response data
            const response_data = response.data;
            // console.log(response_data);

            const userData = await loadUser();
            setUser(userData);
            window.location.assign("/choosePortal");
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

    const handleChange = (event) => {
        setFormValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <div className="register-section">
            <div className="register-container">
                <form
                    className="register__form"
                    action="/register"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <h3 className="register__heading-form">
                        {content.headingRegister}
                    </h3>

                    <InputForm
                        className="register__form-item"
                        type="email"
                        placeholder={content.email}
                        name="email"
                        value={formValues.email}
                        handleChange={handleChange}
                        required
                    />
                    <InputForm
                        className="register__form-item"
                        type="password"
                        placeholder={content.password}
                        name="password"
                        value={formValues.password}
                        handleChange={handleChange}
                    />
                    <InputForm
                        className="register__form-item"
                        type="password"
                        placeholder={content.passwordConfirmation}
                        name="password_confirmation"
                        value={formValues.password_confirmation}
                        handleChange={handleChange}
                    />

                    <div>
                        <Link to="/login" className="register__link">
                            Already registered? Log in
                        </Link>
                    </div>
                    
                    <span className="register__form-other">
                        {content.otherOptions}
                    </span>

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
                        {content.headingRegister}
                    </button>
                </form>
            </div>

            <div className="register__img">
                <h3 className="register__heading register__heading-img">
                    {content.overview}
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
