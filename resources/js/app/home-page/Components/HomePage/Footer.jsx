import React from "react";
// import "..//Styles/Footer.scss"
import "../../Pages/Styles/Footer.scss";
import logo from "../../../../../img/logos/SM-logo-black.svg";
import facebook from "../../../../../img/logos/facebook-logo-black.svg";
import instagram from "../../../../../img/logos/instagram-logo-black.svg";
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer__first-row">
                    <img
                        className="footer__logo-smartrentals"
                        src={logo}
                        alt="SmartRentals logo"
                    />
                    {/* <div className="footer__social-links">
                        <img
                            className="social-links__item"
                            src={facebook}
                            alt="Facebook logo"
                        />
                        <img
                            className="social-links__item"
                            src={instagram}
                            alt="Instagram logo"
                        />
                    </div> */}
                    <div className="footer__copyright">
                        Copyright © 2022 by SmartRentals, Inc. All rights
                        reserved.
                    </div>
                </div>
                <div className="footer__second-row">
                    <h4 className="footer__heading">Contact us</h4>
                    <div className="footer__link"></div>
                    <div className="footer__link"></div>
                    <div className="footer__link">+420603286461</div>
                    <div className="footer__link">hello@smartrentals.com</div>
                </div>
                <div className="footer__third-row">
                    <h4 className="footer__heading">Account</h4>
                    <div className="footer__link">Create account</div>
                    <div className="footer__link">Sign up</div>
                    <div className="footer__link">iOS app</div>
                    <div className="footer__link">Android app</div>
                </div>
                <div className="footer__fourth-row">
                    <h4 className="footer__heading">Company</h4>
                    <div className="footer__link">About SmartRentals</div>
                    <div className="footer__link">For Business</div>
                    <div className="footer__link">Partners</div>
                    <div className="footer__link">Careers</div>
                </div>
                <div className="footer__fifth-row">
                    <h4 className="footer__heading">Resources</h4>
                    <div className="footer__link">Help center</div>
                    <div className="footer__link">Privacy & terms</div>
                </div>
            </div>
        </footer>
        // <div className='footer_container'>
        //   <hr className='hr' />
        //   <footer className='footer'>
        //     <div className="footer__logo">
        //       <img src={logo} alt="logo" />
        //     </div>
        //     <div className="footer__links">
        //       <div className="footer__links-contact">
        //         <a href="/">Contact us</a>
        //       </div>
        //       <div className="footer__links-social">
        //         Find us
        //         <div className="footer__links-social-icons">
        //           <a href="/"><img src={facebook} alt="facebook" /></a>
        //           <a href="/"><img src={instagram} alt="instagram" /></a>
        //         </div>
        //       </div>
        //       <div className="footer__links-location">
        //         <a href="/">Location</a>
        //       </div>
        //     </div>
        //   </footer>
        // </div>
    );
}

export default Footer;
