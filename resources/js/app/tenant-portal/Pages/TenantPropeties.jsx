import React from "react";
import { Link } from "react-router-dom";
// import image from "../../../../img/dashboard/Properties.svg"
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";

export default function TenantProperties() {
    const { user, userData, changeUserData } = useCustomContexts();

    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
        // console.log(userData)
    }, []);

    
    return (

        
        <div className="properies">

            {userData.rented_properties
                ? userData.rented_properties.filter((property) => {
                    return property.pivot.role_id ===3
                }).map((property, i) => {
                      
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
                                      to={`/tenant/dashboard/property/all/${property.id}`}
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
            
        </div>
    );
}

