import React from "react";
import { Link } from "react-router-dom";
import Tiles from "../Components/Dashboard/Listings/Tiles/Tiles";
import "./Styles/Listings.scss";

function Listings() {
    return (
        <>
            <div className="advert">
                <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/apartment">
                        <button className="advert-btns__btn">
                            Add new listing
                        </button>
                    </Link>
                </div>
                <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/land">
                    <button className="advert-btns__btn">
                           Land
                        </button>
                    </Link>
                </div>
                <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/house">
                        <button className="advert-btns__btn">
                            House
                            </button>
                    </Link>
                </div>
                <div className="advert-btns">
                    <Link to="/owner/dashboard/listings/details/commercial">
                        <button className="advert-btns__btn">commercial</button>
                    </Link>
                </div>
            </div>
            <div className="tiles">
                <Tiles />
            </div>
        </>
    );
}

export default Listings;
