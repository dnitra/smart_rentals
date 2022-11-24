import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../../owner-portal/Components/Dashboard/Listings/Apartment/Card";
import "./Styles/PublicListings.scss";
import { useCustomContexts } from "../../Context/ContextsProvider";
import BuildingPlaceholder from "../../../../../resources/img/building-placeholder.jpg";
import likes from "../../../../img/Icons/likes.svg";
import views from "../../../../img/Icons/views.svg";

export default function PublicListings() {
    const { user, userData, changeUserData } = useCustomContexts();
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        getProperties();
    }, []);
    const getProperties = async () => {
        try {
            const response = axios.get("/publicListings/show");

            setProperties(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="pubListings">
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
                                                      {property.images
                                                          .length === 0 ? (
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
                                                                  property
                                                                      .images[0]
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
                                                      {
                                                          property.address
                                                              .zip_code
                                                      }
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
                                              <div className="tiles-form">
                                                  
                                                 
                                              </div>
                                          </div>
                                      </div>
                                  </Card>
                              );
                          })
                    : ""}
            </div>
        </div>
    );
}
