import React, { useEffect } from "react";
import InputField from "../../../owner-portal/Components/Dashboard/Listings/Apartment/InputField";
import "./ApplicationForm.scss";
export default function ApplicationForm({ setFormData }) {
    const selectChangeHandler = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFormData((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };
    const content = {
        emailForm: "Email address",
        nameForm: "Name",
        telForm: "Phone number",
        message: "Message",
    };

   
    return (
        <div className="applicationForm">
            <InputField
                type="text"
                label={content.emailForm}
                name="emailForm"
                value={undefined}
                selectChangeHandler={selectChangeHandler}
            />
            <InputField
                type="text"
                label={content.nameForm}
                name="nameForm"
                value={undefined}
                selectChangeHandler={selectChangeHandler}
            />
            <InputField
                type="text"
                label={content.telForm}
                name="telForm"
                value={undefined}
                selectChangeHandler={selectChangeHandler}
            />

            <div className="applicationForm-field">
                <label className="fieldset-label">
                    {content.message}
                </label>
                <textarea
                    placeholder="I'm interested in your apartment..."
                    className="applicationForm-field__textarea"
                    name="propDescription"
                    value={"I'm interested in renting your property..."}
                    onChange={selectChangeHandler}
                ></textarea>
                
            </div>
        </div>
    );
}
