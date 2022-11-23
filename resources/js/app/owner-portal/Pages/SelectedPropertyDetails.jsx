import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Styles/SelectedPropertyDetails.scss";
// import image from "../../../../img/dashboard/Property.svg";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";
import SelectedPropertyReports from "../Components/Dashboard/PropertyReports/SelectedPropertyReports";

import PropertyDetails from "../Components/PropertyDetails/PropertyDetails";

const SelectedPropertyDetails = () => {
    const { changeUserData } = useCustomContexts();
    const [detailsShown, setDetailsShown] = useState(false);
    const [active, setActive] = useState(false);
    const { propertyId } = useParams();

    useEffect(() => {
        changeUserData();
    }, []);

    return (
        <>
            <PropertyDetails propertyId={propertyId} key={propertyId} />

            <div className="property__about">
                <h2>About property</h2>

                <div className="property__about-details">
                    <div className="property__about-details tab">
                        <button
                            className={
                                "tab__links" +
                                (active === "cashflow" ? "--active" : "")
                            }
                            onClick={() => {
                                setDetailsShown("Cashflow");
                                setActive("cashflow");
                            }}
                        >
                            Cashflow
                        </button>

                        <button
                            className={
                                "tab__links" +
                                (active === "bills" ? "--active" : "")
                            }
                            onClick={() => {
                                setDetailsShown("Bills");
                                setActive("bills");
                            }}
                        >
                            Bills
                        </button>

                        <button
                            className={
                                "tab__links" +
                                (active === "reports" ? "--active" : "")
                            }
                            onClick={() => {
                                setDetailsShown("Reports");
                                setActive("reports");
                            }}
                        >
                            Reports
                        </button>
                    </div>
                    {(() => {
                        switch (detailsShown) {
                            case "Cashflow":
                                return (
                                    <>
                                        <div
                                            id="Cashflow"
                                            className="tab__content"
                                        >
                                            <p>Cashflow</p>
                                        </div>
                                    </>
                                );
                            case "Bills":
                                return (
                                    <>
                                        <div
                                            id="Bills"
                                            className="tab__content"
                                        >
                                            <p>Bills</p>
                                        </div>
                                    </>
                                );
                            case "Reports":
                                return (
                                    <>
                                        <div
                                            id="Reports"
                                            className="tab__content"
                                        >
                                            <SelectedPropertyReports
                                                id={propertyId}
                                            />
                                        </div>
                                    </>
                                );
                            default:
                                "";
                        }
                    })()}
                </div>
            </div>
        </>
    );
};

export default SelectedPropertyDetails;
