import React from "react";
import "./InputField.css";

export default function InputField({ value, label, name, setFormData, type, selectChangeHandler }) {

  return (
    <div className="fieldset-title">
      <label className="fieldset-label big-label">{label} </label>
      <input
        className="inputField"
        name={name}
        type={type}
        min="0"
        value={value}
        onChange={setFormData?setFormData:selectChangeHandler}
      ></input>
    </div>
  );
}
