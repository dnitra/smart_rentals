import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import CheckBox from "./CheckBox";
import Card from "./Card";
import "./Energy.css";

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
        axios.post(url, formData, config).then((response) => {});
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
                        <label className="fieldset-label energy-label">
                            Energy efficiency class:{" "}
                        </label>
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

                    <form className="fieldset-label" onSubmit={handleSubmit}>
                    <label className="fieldset-label energy-label">
                            Upload file:{" "}
                        </label>
                        <label for="file-upload" class="custom-file-upload">
                            <i class="fa fa-cloud-upload"></i> -select
                        </label>
                        <input className="energyInput" id="file-upload" type="file" />
                        
                    </form>

                    {/* -------------------------------------decree dropdown-------------------------------- */}
                    <div className="fieldset-dropdown">
                        <label className="fieldset-label energy-label">
                            According to a regulation:{" "}
                        </label>
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
