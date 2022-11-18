import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tiles from "../Components/Dashboard/Listings/Tiles/Tiles";
import { useCustomContexts } from "../../Context/ContextsProvider";
import "./Styles/Listings.scss";

function Listings() {
    
    const { user, userData, changeUserData } = useCustomContexts();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
    }, []);
    return (
        <div className="listings">
            <div className="listnings-add">
                <button
                    className="listnings-add__btn"
                    onClick={() => {
                        setShowPopup(true);
                    }}
                >
                    add
                </button>
                {/* <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/apartment">
                        <button className="advert-btns__btn">
                            Add
                        </button>
                    </Link>
                </div>
                <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/land">
                        <button className="advert-btns__btn">Land</button>
                    </Link>
                </div>
                <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/house">
                        <button className="advert-btns__btn">House</button>
                    </Link>
                </div>
                <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/commercial">
                        <button className="advert-btns__btn">commercial</button>
                    </Link>
                </div> */}
            </div>

            {showPopup &&
                userData &&
                userData.rented_properties &&
                userData.rented_properties.map((address, index) => {
                    return (
                        <select>
                            <li key={index} className="tiles-address__heading" value={undefined}>
                                {address.address.street_and_number}
                                <br></br>
                                {address.address.city}
                            </li>
                        </select>
                    );
                })}

            <Tiles />
        </div>
    );
}

export default Listings;
