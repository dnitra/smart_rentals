import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllProperty from "../Components/Dashboard/AllProperty";
import NewProperty from "../Components/Dashboard/NewProperty";
import "./Styles/AllProperties.scss";

function AllProperties() {
    return (
        <div>
            <h2 className="all-properties__heading">Your properties</h2>
            <AllProperty />
        </div>
    );
}

export default AllProperties;
