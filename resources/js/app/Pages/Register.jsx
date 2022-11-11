import React from "react";
import "./Register.scss";
// import logo from "../../../img/logos/SM-logo.svg";
import googleLogo from "../../../img/logos/google_logo.svg";
import facebookLogo from "../../../img/logos/facebook_logo.svg";
import registerImg from "../../../img/others/register-img.png";

function Register() {
    return (
        <div className="register-section">
            <div className="register-container">
                {/* <img
                    src={logo}
                    className="register__logo-sm"
                    alt="smart rentals logo"
                /> */}
                <h3 className="register__heading-form">Registration</h3>

                <form className="register__form" action="">
                    <input
                        className="register__form-item"
                        type="text"
                        placeholder="First Name"
                        required
                    />
                    <input
                        className="register__form-item"
                        type="text"
                        placeholder="Last Name"
                        required
                    />
                    <input
                        className="register__form-item"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        className="register__form-item"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="register__form-item"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <select className="register__form-item" name="" id="">
                        <option value="" disabled selected>
                            Select your option
                        </option>
                        <option value="">Manager</option>
                        <option value="">Landlord</option>
                        <option value="">Tenant</option>
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
