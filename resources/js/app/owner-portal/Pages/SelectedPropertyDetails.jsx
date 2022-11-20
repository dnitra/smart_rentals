import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Styles/SelectedPropertyDetails.scss";
// import image from "../../../../img/dashboard/Property.svg";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";

const SelectedPropertyDetails = () => {
    const { userData, changeUserData } = useCustomContexts();
    const [detailsShown, setDetailsShown] = useState(false);
    const [active, setActive] = useState(false);
    const { propertyId } = useParams();

    console.log(propertyId);

    useEffect(() => {
        changeUserData();
    }, []);
    console.log(userData);

    return (
        <>
            <div className="property">
                {userData.rented_properties
                    ? userData.rented_properties
                          .filter((property) => {
                              return propertyId == property.id;
                          })
                          .map((property) => {
                              return (
                                  <div className="property__info">
                                      <div className="property__info-img">
                                          <img
                                              src={property.images[0]}
                                              alt="property_preview"
                                          />
                                      </div>
                                      <div className="property__info-details">
                                          <div className="property__info-details-top">
                                              <h2>{property.name}</h2>
                                              <p>
                                                  {property.address.city}
                                                  {
                                                      property.address
                                                          .street_and_number
                                                  }
                                              </p>
                                          </div>
                                          <div className="property__info-details-buttom">
                                              <div className="property__info-details-buttom-left">
                                                  {/* <h3>{property.squre}m2</h3> */}
                                                  <h4>Apartment area</h4>
                                              </div>
                                              <div className="property__info-details-buttom-right">
                                                  <h3>Tenant</h3>
                                                  {/* <h4>{property.tenant}</h4> */}
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              );
                          })
                    : "no data"}

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
                                                <p>Reports</p>
                                            </div>
                                        </>
                                    );
                                default:
                                    "";
                            }
                        })()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectedPropertyDetails;
