import React from 'react'
// import "..//Styles/Footer.scss"
import "../../Pages/Styles/Footer.scss"
import logo from "../../../../../img/logos/SM-logo-black.svg"
import facebook from "../../../../../img/logos/facebook-logo-black.svg"
import instagram from "../../../../../img/logos/instagram-logo-black.svg"
function Footer() {
  return (
    <div className='footer_container'>
      <hr className='hr' />
      <footer className='footer'>
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__links">
          <div className="footer__links-contact">
            <a href="/">Contact us</a>
          </div>
          <div className="footer__links-social">
            Find us
            <div className="footer__links-social-icons">
              <a href="/"><img src={facebook} alt="facebook" /></a>
              <a href="/"><img src={instagram} alt="instagram" /></a>
            </div>
          </div>
          <div className="footer__links-location">
            <a href="/">Location</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer