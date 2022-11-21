import React from "react";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../../../../Context/ContextsProvider";
import "./Tiles.css";
import Card from "../Apartment/Card";
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
                                      <div className="tiles-address">
                                          <div className="tiles-picture">
                                              <img className="tileImg"
                                                  src={
                                                      property.images.length > 0
                                                          ? "/" +
                                                            property.images[0]
                                                                .image_url
                                                          : ""
                                                  }
                                              ></img>
                                          </div>

                                          <div className="ahoj">
                                              <h3
                                                  key={index}
                                                  className="tiles-address__heading"
                                              >
                                                  {
                                                      property.address
                                                          .street_and_number
                                                  }
                                                  <br></br>
                                                  {property.address.city}
                                                  <br />
                                              </h3>
                                                  <button
                                                      type="button"
                                                      className="titles-btn"
                                                  >
                                                      Edit
                                                  </button>
                                          </div>
                                          <div className="tiles-list">
                                              {/* <ul>
                        <li>Applicants</li>
                        <li>Summary</li>
                        <li>Publish</li>
                    </ul> */}
                                              <button
                                                  type="button"
                                                  className="titles-btn2"
                                              >
                                                  Applicants
                                              </button>
                                              <button
                                                  type="button"
                                                  className="titles-btn2"
                                              >
                                                  Summary
                                              </button>
                                              <button
                                                  type="button"
                                                  value={property.id}
                                                  className="titles-btn2"
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
