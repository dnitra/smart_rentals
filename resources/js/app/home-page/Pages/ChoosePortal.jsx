import React from "react"
import "./ChoosePortal.scss"
import { Link } from "react-router-dom"
export default function ChoosePortal() {
    
    return (
        <div className="choosePortal">
            <Link to="/owner/dashboard/all"><button> OWNER PORTAL</button></Link>
            <Link to=""><button> MANAGER PORTAL</button></Link>
            <Link to="/tenant/dashboard/all"><button> TENANT PORTAL</button></Link>
        </div>
    )
}