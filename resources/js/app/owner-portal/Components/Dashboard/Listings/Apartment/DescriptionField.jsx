import React from "react";
import Card from "./Card";
import InputField from "./InputField";
import "./DescriptionField.css";

export default function DescriptionField({ setFormData }) {
    const titleChangeHandler = (e) => {
        setFormData((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };
    const content = {
        propDescription: "Descibe your property",
    };
    return (
        <Card>
            <h4 className="h4">Description</h4>
            <textarea
                label={content.propDescription}
                name="propDescription"
                value={undefined}
                onChange={setFormData}
            ></textarea>
        </Card>
    );
}
