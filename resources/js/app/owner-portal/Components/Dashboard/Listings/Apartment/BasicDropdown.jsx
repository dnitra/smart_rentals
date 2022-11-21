import React, {useState} from "react";
import "./BasicDropdown.css";
export default function BasicDropdown({ label, setFormData, name }) {
    const [showInput, setShowInput] = useState(false);
    const selectChangeHandler = (e) => {
        setShowInput(e.target.value == "yes")
        setFormData((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };
    return (
        <div className="fieldset-dropdown">
            <label className="label">{label} </label>
            <select
                className="select"
                onChange={selectChangeHandler}
                name={name}
            >
                <option value="" disabled>
                    - select
                </option>

                <option value="no">no</option>
                <option value="yes">yes</option>
            </select>
            {showInput ?
                <input
                className="inputField"
                name={name}
                value=""
                ></input>
                :
                <></>
            }
        </div>
    );
}
