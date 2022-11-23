import React, { useState } from "react";
import axios from "axios";
import InputField from "./InputField";
import CheckBox from "./CheckBox";
import Card from "./Card";
import "./Energy.css";
import UploadPDF from "./UploadPDF";

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
                        <label className="fieldset-label">
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

                    <form className="uploadPDF" onSubmit={handleSubmit}>
                        <h5>Upload PDF</h5>
                        <label htmlFor="file"></label>
                        <input
                            className="inputPDF"
                            type="file"
                            
                            id="file"
                            onChange={handleChange}
                        />
                        <button type="submit">Upload</button>
                    </form>

                    {/* -------------------------------------decree dropdown-------------------------------- */}
                    <div className="fieldset-dropdown">
                        <label className="fieldset-label">
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
