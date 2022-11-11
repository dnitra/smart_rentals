import React from "react";
import "./Register.scss";
import logo from "../../../img/logos/SM-logo.svg";
import googleLogo from "../../../img/logos/google_logo.svg";
import facebookLogo from "../../../img/logos/facebook_logo.svg";

function Register() {
    // const logo = {
    //     data: (
    //         <svg
    //             width="189"
    //             height="151"
    //             viewBox="0 0 189 151"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //             xmlnsxlink="http://www.w3.org/1999/xlink"
    //         >
    //             <rect width="189" height="151" fill="url(#pattern0)" />
    //             <defs>
    //                 <pattern
    //                     id="pattern0"
    //                     patternContentUnits="objectBoundingBox"
    //                     width="1"
    //                     height="1"
    //                 >
    //                     <use
    //                         xlinkhref="#image0_112_253"
    //                         transform="translate(-0.000965135) scale(0.00260242 0.00325733)"
    //                     />
    //                 </pattern>
    //                 <image
    //                     id="image0_112_253"
    //                     width="385"
    //                     height="307"
    //                     xlinkhref="data:image/png;base64,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"
    //                 />
    //             </defs>
    //         </svg>
    //     ),
    // };
    return (
        <div className="register-section">
            <div className="register-container">
                {/* <div className="register-logo">{logo.data}</div> */}
                <img
                    src={logo}
                    className="register__logo-sm"
                    alt="smart rentals logo"
                />
                <h3 className="register__heading">Registration</h3>

                <form className="register__form" action="">
                    <input
                        className="register__form-input"
                        type="text"
                        placeholder="First Name"
                        required
                    />
                    <input
                        className="register__form-input"
                        type="text"
                        placeholder="Last Name"
                        required
                    />
                    <input
                        className="register__form-input"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        className="register__form-input"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="register__form-input"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <select className="register__form-input" name="" id="">
                        <option value="">Manager</option>
                        <option value="">Landlord</option>
                        <option value="">Tenant</option>
                    </select>

                    <div className="register__">
                        <img
                            src={facebookLogo}
                            className="register__logos"
                            alt="smart rentals logo"
                        />
                        <img
                            src={googleLogo}
                            className="register__logos"
                            alt="smart rentals logo"
                        />
                    </div>
                </form>
            </div>

            {/* <img
                className="register__img"
                src={registerImg}
                alt="image of smart rentals app"
            /> */}
        </div>
    );
}

export default Register;
