import React from "react";
import "./DateInput.css";
export default function DateInput({ name, label, value, setFormData }) {
  const selectChangeHandler = (e) => {
    setFormData((previous_values) => {
      return { ...previous_values, [e.target.name]: e.target.value };
    });
  };
  return (
    <Card className="fieldset-item">
      <label>{label}</label>
      <input
        className="selectDate"
        type="date"
        min="2019-01-01"
        max="2023-12-31"
        value={value}
        name={name}
        onChange={selectChangeHandler}
      ></input>
    </Card>
  );
}
