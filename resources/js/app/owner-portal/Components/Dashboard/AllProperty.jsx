import React from "react";
import { Link } from "react-router-dom";
// import image from "../../../../img/dashboard/Properties.svg"
import newPropertyImage from "../../../../../img/dashboard/NewProperty.svg";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../../Context/ContextsProvider";

function AllProperty() {
    const { user, userData, changeUserData } = useCustomContexts();

    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
    }, []);

    console.log(userData);

    return (
        <div className="properies">
            {userData.rented_properties
                ? userData.rented_properties.map((property, i) => {
                      console.log(property);
                      return (
                          <div className="property" key={i}>
                              <div className="property__img">
                                  <img
                                      src={"/" + property.images[0]?.image_url}
                                      alt="property"
                                  />
                              </div>
                              <div className="property__adress">
                                  <p>{property.address.street_and_number}</p>
                                  <p>{property.address.city}</p>
                                  <Link
                                      to={`/dashboard/property/${property.id}`}
                                  >
                                      <button className="property__button">
                                          Details
                                      </button>
                                  </Link>
                              </div>
                          </div>
                      );
                  })
                : ""}
            <div className="property">
                <div className="property__img">
                    <img src={newPropertyImage} alt="" />
                </div>
                <div className="property__adress">
                    <p></p>
                    <Link to={"/owner/properties"}>
                        <button className="property__add">+</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AllProperty;
