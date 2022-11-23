import React from "react";
import Card from "./Card";
import InputField from "./InputField";

export default function DescriptionField({ setFormData }) {
    const titleChangeHandler = (e) => {
        setFormData((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };
    return (
        <Card>
            <h4>Description</h4>
            <InputField
                type="text"
                label={content.usable}
                name="fLocation"
                value={undefined}
                setFormData={setFormData}
            />
        </Card>
    );
}
