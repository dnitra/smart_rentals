import React from "react";
import InputField from "../../../owner-portal/Components/Dashboard/Listings/Apartment/InputField";
import "./ApplicationForm.scss";
export default function ApplicationForm({ setFormData }) {
    const selectChangeHandler = (e) => {
        setFormData((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };
    const content = {
        emailForm: "Your email",
        nameForm: "Name",
        telForm: "Telephone",
    };
    return (
        <div className="applicationForm">
            <InputField
                type="text"
                label={content.emailForm}
                name="emailForm"
                value={undefined}
                setFormData={setFormData}
            />
            <InputField
                type="text"
                label={content.nameForm}
                name="nameForm"
                value={undefined}
                setFormData={setFormData}
            />
            <InputField
                type="text"
                label={content.telForm}
                name="telForm"
                value={undefined}
                setFormData={setFormData}
            />

            <div className="applicationForm-field">
                <label className="fieldset-label">
                    {content.propDescription}
                </label>
                <textarea
                    className="applicationForm-field__textarea"
                    name="propDescription"
                    value={undefined}
                    onChange={setFormData}
                ></textarea>
            </div>
        </div>
    );
}
