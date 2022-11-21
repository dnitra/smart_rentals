import React from "react";
// import "./Styles/Dashboard.scss"
import AllProperty from "../Components/Dashboard/AllProperty";
import { useCustomContexts } from "../../Context/ContextsProvider";
function Dashboard() {
    const { user } = useCustomContexts();
    return (
        <div>
            {/* <div className="property"></div>
            <div className="cashflow"></div>
            <div className="tasks"></div>
            <div className="bills"></div>
            <div className="mailbox"></div> */}
        </div>
    );
}

export default Dashboard;
