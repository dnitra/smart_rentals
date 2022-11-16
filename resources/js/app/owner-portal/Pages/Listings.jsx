import React from 'react'
import { Link } from 'react-router-dom'
function Listings() {
    return (
        <div><Link to="/dashboard/listings/create"><button>Add new listing</button></Link></div>
    )
}

export default Listings