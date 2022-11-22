import React, { useEffect } from "react";
// import "./Styles/Dashboard.scss"
import { useCustomContexts } from "../../Context/ContextsProvider";
import PropertyList from "../Components/PropertyList/PropertyList";

function Dashboard() {
    const { userData, changeUserData } = useCustomContexts();
    useEffect(() => {
        changeUserData();
    }, []);
    return (
        <>
            <PropertyList />
            <div className="cashflow"></div>
            <div className="tasks"></div>
            <div className="bills"></div>
            <div className="mailbox"></div>
        </>
    );
}

export default Dashboard;
