import React from "react";
import "./InputField.css";

export default function InputField({ value, label, name, setFormData, type }) {
  const titleChangeHandler = (e) => {
    setFormData((previous_values) => {
      return { ...previous_values, [e.target.name]: e.target.value };
    });
    // console.log(enteredTitle);
  };
  return (
    <div className="fieldset-title">
      <label>{label} </label>
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
