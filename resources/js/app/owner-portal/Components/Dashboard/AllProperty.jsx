import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../../img/dashboard/Properties.svg";
import newPropertyImage from "../../../../../img/dashboard/NewProperty.svg";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../../../app/Context/ContextsProvider";
function AllProperty() {
    const [data, setData] = useState([]);
    const { user } = useCustomContexts();
    console.log(user);

    const properties = [
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id:1
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 2
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 3
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 4
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 5
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 6
        },
    ];
    useEffect(() => {
        setData(properties);
    }, []);
    return (
        <div className="properies">
            {properties
                ? properties.map((property, i) => {
                      return (
                          <div className="property" key={i}>
                              <div className="property__img">
                                  <img src={`${property.img}`} alt="" />
                              </div>
                              <div className="property__adress">
                                  <p>{property.address}</p>
                                  <Link to={`/owner/dashboard/all/${property.id}`}>
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
                    <Link to={"/"}>
                        <button className="property__add">+</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AllProperty;
