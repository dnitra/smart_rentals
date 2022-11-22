import React from "react";
import "./Styles/Dashboard.scss"
import { useCustomContexts } from "../../Context/ContextsProvider";
import DashboardCashflow from "../Components/Dashboard/Dashboard-components/DashboardCashflow";
import DashboardReports from "../Components/Dashboard/Dashboard-components/DashboardReports";


function Dashboard() {

    return (
        <div className="dashboard">
            <div className="dashboard__properties"></div>
            <div className="dashboard__cashflow">
                <DashboardCashflow />
            </div>
            <div className="dashboard__reports">
                <DashboardReports />
            </div>
            <div className="dashboard__bills"></div>
            <div className="dashboard__messages"></div>
        </div>
    );
}

export default Dashboard;
