import React, { useEffect, useState } from "react";
import "./CheckBox.css";
export default function CheckBox({ label, name, setFormData }) {
    const [checkboxValue, setCheckboxValue] = useState(false);
    const handler = () => {
        setCheckboxValue(!checkboxValue);
    };

    const selectChangeHandler = (e) => {
        setFormData((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };

    return (
        <div className="checkbox">
            <input
                className="checkbox-input"
                type="checkbox"
                name={name}
                value={checkboxValue}
                // checked={checkboxValue}
                onChange={(e) => {
                    selectChangeHandler(e);
                    handler();
                }}
            ></input>
            <label className="checkbox-label">{label} </label>
        </div>
    );
}
