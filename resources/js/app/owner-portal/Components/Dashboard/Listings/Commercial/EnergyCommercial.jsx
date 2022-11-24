import React, { useState } from "react";
import axios from "axios";
import InputField from "../Apartment/InputField";
import CheckBox from "../Apartment/CheckBox";
import Card from "../Apartment/Card";

export default function Energy({ setFormData }) {
    const [file, setFile] = useState();

    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const url = "";
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", file.name);
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });
    }
    const content = {
        energyConsumptionIndex: "Energy consumption index:(kWh/m2)",
    };

    return (
        <Card>
            <div className="energy-content">
                <h4 className="h4">Energy eficciency of the building</h4>

                <CheckBox
                    label="lowEnergy"
                    value={null}
                    setFormData={setFormData}
                    name="lowEnergy"
                />
                <fieldset className="fieldset">
                    {/* -------------------------------energy dropdown----------------------- */}
                    <div className="input-field">
                        <label className="fieldset-label">Energy efficiency class: </label>
                        <select className="select">
                            <option value="">- select</option>
                            <option value="a">A - extremely efficient</option>
                            <option value="b">B - very efficient</option>
                            <option value="c">C - efficient</option>
                            <option value="d">D - less efficient</option>
                            <option value="e">E - uneconomical</option>
                            <option value="f">F - very uneconomical</option>
                            <option value="g">
                                G - extremely uneconomical
                            </option>
                        </select>
                    </div>
                    <InputField
                        label={content.energyConsumptionIndex}
                        name="energyConsumptionIndex"
                        value={undefined}
                        setFormData={setFormData}
                    />

                    {/* ---------------------------------------upload file form---------------------------------- */}

                    <form onSubmit={handleSubmit}>
                        <h5>React File Upload</h5>
                        <input type="file" onChange={handleChange} />
                        <button type="submit">Upload</button>
                    </form>
                    {/* -------------------------------------decree dropdown-------------------------------- */}
                    <div className="fieldset-dropdown">
                        <label className="fieldset-label">According to a regulation: </label>
                        <select className="select">
                            <option value="">- select</option>
                            <option value="idk">TBD</option>
                            <option value="idk">TBD</option>
                            <option value="idk">TBD</option>
                        </select>
                    </div>
                </fieldset>
            </div>
        </Card>
    );
}
