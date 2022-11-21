import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tiles from "../Components/Dashboard/Listings/Tiles/Tiles";
import { useCustomContexts } from "../../Context/ContextsProvider";
import "./Styles/Listings.scss";

function Listings({ name }) {
    const { user, userData, changeUserData } = useCustomContexts();
    const [selectedProperty, setSelectedProperty] = useState("");

    const handleSelect = (e) => {
        setSelectedProperty(e.target.value);
    };
    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
    }, []);

    return (
        <div className="listings">
            <form className="listnings-add">
                {
                userData &&
                userData.rented_properties &&
                userData.rented_properties.map((address, index, id) => {
                    return (
                        <select className="select-listnings" name="propertyId">
                            <option value="">- select</option>
                            <option
                                className="tiles-address__heading"
                                key={index}
                                value={id}
                            >
                                {address.address.street_and_number}
                                <br></br>
                                {address.address.city}
                            </option>
                        </select>
                    );
                })}

                {/* {selectedProperty ? <button>Publish the property</button> : ""} */}
            </form>

            <Tiles />
        </div>
    );
}

export default Listings;
