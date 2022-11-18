import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.scss";
import googleLogo from "../../../../img/logos/google_logo.svg";
import facebookLogo from "../../../../img/logos/facebook_logo.svg";
import registerImg from "../../../../img/others/register-img.png";
import InputForm from "./../Components/InputForm/InputForm";
import { loadUser } from "../../actions/auth";
import { useCustomContexts } from "../../Context/ContextsProvider";

function Login(props) {
    const { user, setUser, loadingUser, content, changeUserData } =
        useCustomContexts();
    // settin values from the form
    const [loginValues, setLoginValues] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // make the AJAX request
            const response = await axios.post("/login", loginValues);
            // get the (already JSON-parsed) response data
            console.log(response.status);
            const response_data = response.data;

            // Load information about the user
            const data = await loadUser();
            setUser(data);

            //load all the user data with all of his database data to userContext as userData variable
            changeUserData();

            // console.log(user);
            window.location.assign("/owner/dashboard/all");
        } catch (error) {
            // if the response code is not 2xx (success)
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

    // handle change of the inputs in the form
    const handleChange = (event) => {
        setLoginValues((previous_values) => {
            return {
                // return all the previous values plus name of the changed input (key) and its value
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
                    action="/login"
                    method="post"
                    onSubmit={handleSubmit}
                >
                    <h3 className="register__heading-form">
                        {content.headingLogin}
                    </h3>
                    <InputForm
                        className="register__form-item"
                        type="email"
                        placeholder={content.email}
                        name="email"
                        value={loginValues.email}
                        handleChange={handleChange}
                        required
                    />
                    <InputForm
                        className="register__form-item"
                        type="password"
                        placeholder={content.password}
                        name="password"
                        value={loginValues.password}
                        handleChange={handleChange}
                    />
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
                        {content.headingLogin}
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

export default Login;
