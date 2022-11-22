import React from "react";
import { useCustomContexts } from "../../../Context/ContextsProvider";
import BuildingPlaceholder from "../../../../../img/building-placeholder.jpg";
import "./PropertyList.scss";
import { Link } from "react-router-dom";

export default function PropertyList() {
    const { userData, changeUserData } = useCustomContexts();
    console.log(userData);

    return (
        <>
            {userData.rented_properties
                ? userData.rented_properties.map((property) => {
                      return (
                          <div
                              className="dashboard__properties-item"
                              key={property.id}
                          >
                              <div className="properties-item__left">
                                  <div className="properties-item__left-img-container">
                                      {property.images.length === 0 ? (
                                          <img
                                              className="left-img-container__image"
                                              src={BuildingPlaceholder}
                                              alt="building placeholder"
                                          />
                                      ) : (
                                          <img
                                              className="left-img-container__image"
                                              src={
                                                  "/" +
                                                  property.images[0]?.image_url
                                              }
                                              alt="property"
                                          />
                                      )}
                                  </div>
                              </div>
                              <div className="properties-item__right">
                                  <div className="properties-item__right-address">
                                      {property.address.street_and_number},
                                      &nbsp;
                                      {property.address.city}
                                  </div>

                                  <Link
                                      className="properties-item__right-details-link"
                                      to={`/owner/dashboard/property/all/${property.id}`}
                                  >
                                      <button className="properties-item__right-details-button log-button">
                                          Details
                                      </button>
                                  </Link>
                              </div>
                          </div>
                      );
                  })
                : null}
        </>
    );
}
