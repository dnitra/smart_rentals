import React from "react";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../../../../Context/ContextsProvider";
import "./Tiles.css";
import Card from "../Apartment/Card";
import BuildingPlaceholder from "../../../../../../../img/building-placeholder.jpg";
import likes from "../../../../../../../img/Icons/likes.svg";
import views from "../../../../../../../img/Icons/views.svg";

export default function Tiles() {
    const { user, userData, changeUserData } = useCustomContexts();

    const handleSelect = (e) => {
        const selectedProperty = e.target.value;

        try {
            const response = axios.post("/api/property/publish", {
                propertyId: selectedProperty,
            });
            changeUserData();
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
        console.log(userData);
    }, []);

    return (
        <div className="tiles">
            {userData.rented_properties
                ? userData.rented_properties
                      .filter(
                          (rented_property) =>
                              rented_property.published == 1 &&
                              rented_property.pivot.role_id == 1
                      )
                      .map((property, index) => {
                          return (
                              <Card key={index}>
                                  <div className="tile">
                                      <div className="tiles-content">
                                          <div className="tiles-picture">
                                              <div className="tiles-picture__big">
                                                  {property.images.length ===
                                                  0 ? (
                                                      <img
                                                          className="tileImg"
                                                          src={
                                                              BuildingPlaceholder
                                                          }
                                                          alt="building placeholder"
                                                      />
                                                  ) : (
                                                      <img
                                                          className="tileImg"
                                                          src={
                                                              "/" +
                                                              property.images[0]
                                                                  ?.image_url
                                                          }
                                                          alt="property"
                                                      />
                                                  )}
                                              </div>
                                              <div className="tiles-picture__small">
                                                  <img
                                                      className="tileIcon"
                                                      src={views}
                                                      alt="views"
                                                  />

                                                  <img
                                                      className="tileIcon"
                                                      src={likes}
                                                      alt="likes"
                                                  />
                                              </div>
                                          </div>

                                          <div className="tile-address">
                                              <h3
                                                  key={index}
                                                  className="tile-address__heading"
                                              >
                                                  {
                                                      property.address
                                                          .street_and_number
                                                  }
                                                  <br></br>
                                                  {property.address.zip_code}
                                                  <br></br>
                                                  {property.address.city}
                                                  <br />
                                              </h3>
                                              <button
                                                  type="button"
                                                  className="tile-btn"
                                              >
                                                  Edit
                                              </button>
                                          </div>
                                          <div className="tiles-list">
                                              <button
                                                  type="button"
                                                  className="tiles-btn2"
                                              >
                                                  Applicants
                                              </button>
                                              <button
                                                  type="button"
                                                  className="tiles-btn2"
                                              >
                                                  Summary
                                              </button>
                                              <button
                                                  type="button"
                                                  value={property.id}
                                                  className="tiles-btn2"
                                                  onClick={handleSelect}
                                              >
                                                  Unpublish
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                              </Card>
                          );
                      })
                : ""}
        </div>
    );
}
