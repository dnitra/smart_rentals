import React from "react";
import Card from "../Apartment/Card";
import "../Apartment/BasicInfo.css";
export default function BasicInfoLand({ setFormData }) {
    const selectChangeHandler = (e) => {
        setFormData((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };

    const content = {
        location: "Location",
        protection: "Protection",
    };

    return (
        <Card>
            <div className="listings-content">
                <h4 className="h4">Basic Information</h4>
                <fieldset className="fieldset">
                    <div>
                        <div className="fieldset-dropdown">
                            <label className="fieldset-label">{content.location} </label>
                            <select
                                className="select"
                                name="buildingMaterial"
                                onChange={selectChangeHandler}
                            >
                                <option value="">- select</option>
                                <option value="villageCenter">
                                    Center of the village
                                </option>
                                <option value="villageQuiet">
                                    A quiet part of village
                                </option>
                                <option value="villageBusy">
                                    Busy part of village
                                </option>
                                <option value="villageEdge">
                                    The edge of village
                                </option>
                                <option value="estate">Housing estate</option>
                                <option value="solitude">Solitude</option>
                            </select>
                        </div>
                        <div className="fieldset-dropdown">
                            <label className="fieldset-label">{content.protection} </label>
                            <select
                                className="select"
                                name="buildingMaterial"
                                onChange={selectChangeHandler}
                            >
                                <option value="">- select</option>
                                <option value="protectZone">
                                    protection zone
                                </option>
                                <option value="natPark">national park</option>
                                <option value="chko">CHKO</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
            </div>
        </Card>
    );
}
