import React from "react";
// import "./Styles/Dashboard.scss"
import AllProperty from "../Components/Dashboard/AllProperty";
import { useCustomContexts } from "../../Context/ContextsProvider";
import Cashflow from "../Components/Dashboard/Dashboard-components/Cashflow";
import PropertyReports from "../Components/Dashboard/PropertyReports/PropertyReports";

function Dashboard() {

    return (
        <div className="dashboard">
            <div className="dashboard__cashflow">
                <Cashflow/>
            </div>
            <div className="dashboard__reports">
                <PropertyReports/>
            </div>
            <div className="dashboard__bills"></div>
            <div className="dashboard__messages"></div>
        </div>
    );
}

export default Dashboard;
