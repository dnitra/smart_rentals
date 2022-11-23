import React, { useEffect, useState } from "react";

import Tiles from "../Components/Dashboard/Listings/Tiles/Tiles";
import { useCustomContexts } from "../../Context/ContextsProvider";
import "./Styles/Listings.scss";
import Card from "../Components/Dashboard/Listings/Apartment/Card";
import { Link } from "react-router-dom";

function Listings() {
    const [propertyType, setPropertyType] = useState("");
    const { user, userData, changeUserData } = useCustomContexts();
    const [selectedProperty, setSelectedProperty] = useState("");

    const handleSelect = () => {
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
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedProperty(e.target.value);
        setPropertyType(e.target.propertytype);
        console.log(e.target.key);
    };
    console.log(userData);
    console.log(propertyType);

    return (
        <div className="listings">
            <form className="listnings-add">
                <div className="listnings-field">
                    <select
                        className="listnings-select"
                        name="propertyId"
                        onChange={handleChange}
                        value={selectedProperty}
                    >
                        <option value="">- select</option>
                        {userData.rented_properties
                            ? userData.rented_properties
                                  .filter(
                                      (rented_property) =>
                                          rented_property.published == null &&
                                          rented_property.pivot.role_id == 1
                                  )
                                  .map((rented_property) => {
                                      return (
                                          <option
                                              className="tiles-address__heading"
                                              key={rented_property.id}
                                              value={rented_property.id}
                                              propertytype={
                                                  rented_property.rented_property_type_id
                                              }
                                          >
                                              {
                                                  rented_property.address
                                                      .street_and_number
                                              }

                                              {rented_property.address.city}
                                          </option>
                                      );
                                  })
                            : "...loading"}
                    </select>
                    <Link
                        to={`/owner/dashboard/listings/details/${propertyType}`}
                    >
                        <button>Add details</button>
                    </Link>
                    <button
                        className="listnings-publish__btn"
                        type="button"
                        onClick={handleSelect}
                    >
                        publish
                    </button>
                </div>
            </form>

            <Tiles select={handleSelect} />
        </div>
    );
}

export default Listings;
