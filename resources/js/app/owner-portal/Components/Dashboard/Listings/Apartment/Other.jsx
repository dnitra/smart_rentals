import React from "react";
import Card from "./Card";
import CheckBox from "./CheckBox";
import "./Other.css";
export default function Other({ setFormData }) {
    return (
        <Card>
            <div className="other-content">
                <h4 className="h4">Other</h4>
                <fieldset className="fieldset">
                    <label>Arranged: </label>
                    <select className="select">
                        <option value="">- select</option>
                        <option value="yes">yes</option>
                        <option value="no">no Park</option>
                        <option value="partialy">partialy</option>
                    </select>
                    <CheckBox
                        label="Attic"
                        setFormData={setFormData}
                        name="lowEnergy"
                    />
                </fieldset>
            </div>
        </Card>
    );
}
