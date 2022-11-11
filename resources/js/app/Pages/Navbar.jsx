import React from 'react'
import "./Styles/Navbar.scss"
function Navbar() {
    const logo = {
        data: (
        <svg width="229" height="42" viewBox="0 0 229 42" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <rect width="229" height="42" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_100_14" transform="translate(0 -0.000834235) scale(0.00189394 0.0103265)"/>
                    </pattern>
                    <image id="image0_100_14" width="528" height="97" xlinkHref="data:image/png;base64,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"/>
                </defs>
        </svg>
)
    }
  return (
    <div className='navbar'>
        <div className="navbar__logo">
            {logo.data}
        </div>
        <div className="navbar__links">
            
            <p><span>Why SR</span></p>
            <p>Product</p>
            <p>Prices</p>
            <p>Contacts</p>
            <p>Reviews</p>
        </div>
        <div className="navbar__buttons">
            <button className='log-button'>Log In</button>
            <button className='log-button'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
