import React, { useEffect, useState } from "react";

import Tiles from "../Components/Dashboard/Listings/Tiles/Tiles";
import { useCustomContexts } from "../../Context/ContextsProvider";
import "./Styles/Listings.scss";
import Card from "../Components/Dashboard/Listings/Apartment/Card";
import { Link } from "react-router-dom";

const propertyTypes = {
    1: "Flat",
    2: "House",
    3: "Commercial",
    4: "Land",
};
function Listings() {
    const [propertyType, setPropertyType] = useState("");
    const { user, userData, changeUserData } = useCustomContexts();
    const [selectedProperty, setSelectedProperty] = useState("");

    const handleSelect = async () => {
        try {
            const response = await axios.post("/api/property/publish", {
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
        console.log(propertyType);
        console.log(selectedProperty);
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setSelectedProperty(e.target.value);

        const id = userData.rented_properties
            .filter((property) => {
                return property.id == e.target.value;
            })
            .map((property) => {
                return property.rented_property_type_id;
            })[0];
        console.log("id " + propertyTypes[id]);
        setPropertyType(propertyTypes[id]);
    };
    

    return (
        <div className="listings">
            <h2 className="listings__heading">Add new listing</h2>
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
                                              boo={
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
                    {selectedProperty ? (
                        <Link
                            to={`/owner/dashboard/listings/details/${propertyType}}`}
                        >
                            <button
                                className="listnings-publish__btn"
                                type="button"
                            >
                                Add details
                            </button>
                        </Link>
                    ) : (
                        ""
                    )}
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
