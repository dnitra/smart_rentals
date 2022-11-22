import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Styles/SelectedPropertyDetails.scss";
// import image from "../../../../img/dashboard/Property.svg";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";
import BuildingPlaceholder from "../../../../img/building-placeholder.jpg";

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
                                          {property.images.length === 0 ? (
                                              <img
                                                  src={BuildingPlaceholder}
                                                  alt="building placeholder"
                                              />
                                          ) : (
                                              <img
                                                  src={
                                                      "/" +
                                                      property.images[0]
                                                          ?.image_url
                                                  }
                                                  alt="property"
                                              />
                                          )}
                                      </div>
                                      <div className="property__info-details">
                                          <div className="property__info-details-top">
                                              {/* <h2>{property.name}</h2> */}
                                              <h2>
                                                  {property.address.city},&nbsp;
                                                  {
                                                      property.address
                                                          .street_and_number
                                                  }
                                              </h2>
                                          </div>
                                          <div className="property__info-details-buttom">
                                              <div className="property__info-details-buttom-left">
                                                  <span className="property__info-details-buttom-left-area">
                                                      Area
                                                  </span>
                                                  <span>
                                                      {!property.area ? (
                                                          "N/A"
                                                      ) : (
                                                          <span>
                                                              {property.area} m
                                                              <sup>2</sup>
                                                          </span>
                                                      )}
                                                  </span>
                                              </div>
                                              <div className="property__info-details-buttom-right">
                                                  <span className="property__info-details-buttom-right-tenant">
                                                      Tenant
                                                  </span>
                                                  <span>
                                                      {property
                                                          .property_accesses
                                                          .length === 0 ? (
                                                          "N/A"
                                                      ) : (
                                                          <>
                                                              <span>
                                                                  {
                                                                      property
                                                                          .property_accesses[0]
                                                                          .first_name
                                                                  }
                                                              </span>
                                                              &nbsp;
                                                              <span>
                                                                  {
                                                                      property
                                                                          .property_accesses[0]
                                                                          .last_name
                                                                  }
                                                              </span>
                                                          </>
                                                      )}
                                                  </span>
                                              </div>
                                          </div>

                                          <div className="property__info-details-buttom-buttons">
                                              <Link
                                                  className="property__info-details-buttom-buttons-link"
                                                  to={`/owner/dashboard/property/all/${propertyId}/edit`}
                                              >
                                                  <button className="log-button log-buttons_property">
                                                      Edit property details
                                                  </button>
                                              </Link>
                                              {property.property_accesses
                                                  .length === 0 ? (
                                                  <Link
                                                      className="property__info-details-buttom-buttons-link"
                                                      to={`/`}
                                                  >
                                                      <button className="log-button log-buttons_property">
                                                          Add tenant
                                                      </button>
                                                  </Link>
                                              ) : null}
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
