import React, { useEffect } from "react";
import BuildingPlaceholder from "../../../../../img/building-placeholder.jpg";
import { useCustomContexts } from "../../../Context/ContextsProvider";
import { Link } from "react-router-dom";

export default function PropertyDetails({ propertyId }) {
    useEffect(() => {
        changeUserData();
    }, []);
    const { userData, changeUserData } = useCustomContexts();
    return (
        <div className="property">
            {userData.rented_properties
                ? userData.rented_properties
                      .filter((property) => {
                          return propertyId == property.id;
                      })
                      .map((property) => {
                          return (
                              <div className="property__info" key={property.id}>
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
                                                  property.images[0]?.image_url
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
                                                  {property.property_accesses
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
                                          {property.property_accesses.length ===
                                          0 ? (
                                              <Link
                                                  className="property__info-details-buttom-buttons-link"
                                                  to={`/owner/property/${propertyId}/accesses`}
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
        </div>
    );
}
