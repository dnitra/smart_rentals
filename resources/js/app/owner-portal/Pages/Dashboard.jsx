import React, { useEffect } from "react";
import "./Styles/Dashboard.scss";
import { useCustomContexts } from "../../Context/ContextsProvider";
import PropertyList from "../Components/PropertyList/PropertyList";
import DashboardCashflow from "../Components/Dashboard/Dashboard-components/DashboardCashflow";
import DashboardReports from "../Components/Dashboard/Dashboard-components/DashboardReports";
import DashboardMessages from "../Components/Dashboard/Dashboard-components/DashboardMessages";
import DashboardBills from "../Components/Dashboard/Dashboard-components/DashboardBills";
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard__properties">
                <PropertyList />
            </div>

            <div className="dashboard__cashflow">
                <DashboardCashflow />
            </div>
            <div className="dashboard__reports">
                <DashboardReports />
            </div>
            <div className="dashboard__bills">
                <DashboardBills/>
            </div>
            <div className="dashboard__messages">
                <DashboardMessages/>
            </div>
            {/* <div className="dashboard__bills"></div>
            <div className="dashboard__messages"></div> */}
        </div>
    );
}

export default Dashboard;
