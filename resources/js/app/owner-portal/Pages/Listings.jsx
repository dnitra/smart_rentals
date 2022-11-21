import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tiles from "../Components/Dashboard/Listings/Tiles/Tiles";
import { useCustomContexts } from "../../Context/ContextsProvider";
import "./Styles/Listings.scss";
import Card from "../Components/Dashboard/Listings/Apartment/Card";

function Listings() {
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
    };
    console.log(userData);

    return (
        <div className="listings">
            
            
                <form className="listnings-add">
                    <div>
                        <select
                            className="select-listnings"
                            name="propertyId"
                            onChange={handleChange}
                            value={selectedProperty}
                        >
                            <option value="">- select</option>
                            {userData &&
                                userData.rented_properties &&
                                userData.rented_properties
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
                                            >
                                                {
                                                    rented_property.address
                                                        .street_and_number
                                                }
    
                                                {rented_property.address.city}
                                            </option>
                                        );
                                    })}
                        </select>
                        <button className="listnings-add__btn" type="button" onClick={handleSelect}>
                            publish
                        </button>
                    </div>
    
                    {/* {selectedProperty ? <button>Publish the property</button> : ""} */}
                </form>
            

            <Tiles select={handleSelect} />
        </div>
    );
}

export default Listings;
