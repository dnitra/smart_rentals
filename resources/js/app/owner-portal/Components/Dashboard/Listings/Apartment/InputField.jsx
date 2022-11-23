import React from "react";
import "./InputField.css";

export default function InputField({ value, label, name, setFormData, type }) {
  const titleChangeHandler = (e) => {
    setFormData((previous_values) => {
      return { ...previous_values, [e.target.name]: e.target.value };
    });
   
  };
  return (
    <div className="fieldset-title">
      <label className="fieldset-label big-label">{label} </label>
      <input
        className="inputField"
        name={name}
        type={type}
        min="0"
        value={value}
        onChange={titleChangeHandler}
      ></input>
    </div>
  );
}
