import React from 'react'
import { Link } from 'react-router-dom'
function Listings() {
    return (
        <>
            <div><Link to="/owner/dashboard/listings/details/apartment"><button>Add new listing</button></Link></div>
            <div><Link to="/owner/dashboard/listings/details/land"><button>land</button></Link></div>
            <div><Link to="/owner/dashboard/listings/details/house"><button>house</button></Link></div>
            <div><Link to="/owner/dashboard/listings/details/commercial"><button>commercial</button></Link></div>
        </>
    )
}

export default Listings