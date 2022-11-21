import React from "react";
import { useState, useEffect } from "react";
import { useCustomContexts } from "../../../../../Context/ContextsProvider";
import "./Tiles.css";
import Card from "../Apartment/Card";
export default function Tiles() {
    const { user, userData, changeUserData } = useCustomContexts();

    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
         console.log(userData);
      }, []);
     
      
      return (
        <Card>
            <div className="tiles">
                <div className="tiles-address">
                  <div className="tiles-picture"></div>
                    {userData.rented_properties
                        ? userData.rented_properties.map((address, index) => {
                          return (
                            <>
                                    <h3
                                        key={index}
                                        className="tiles-address__heading"
                                    >
                                        {address.address.street_and_number}
                                        <br></br>
                                        {address.address.city}
                                    </h3>
                            </>
                              );
                          })
                        : ""}
                <button className="titles-btn">Edit</button>
                </div>

                <div className="tiles-list">
                    {/* <ul>
                        <li>Applicants</li>
                        <li>Summary</li>
                        <li>Publish</li>
                    </ul> */}
                    <button className="titles-btn2">Applicants</button>
                    <button className="titles-btn2">Summary</button>
                    <button className="titles-btn2">Publish</button>
                </div>
            </div>
        </Card>
    );
}
