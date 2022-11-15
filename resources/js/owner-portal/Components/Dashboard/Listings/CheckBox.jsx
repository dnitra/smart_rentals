import React, { useEffect, useState } from "react";

export default function CheckBox({ label, name, setFormData }) {
  const [checkboxValue, setCheckboxValue] = useState(false);
  const handler = () => {
    setCheckboxValue(!checkboxValue);
  };

  const selectChangeHandler = (e) => {
    setFormData((previous_values) => {
      return { ...previous_values, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    console.log(checkboxValue);
  }, [checkboxValue]);

  return (
    <div className="checkbox">
      <label className="checkbox-label">{label} </label>
      <input
        type="checkbox"
        name={name}
        value={checkboxValue}
        // checked={checkboxValue}
        onChange={(e) => {
          selectChangeHandler(e);
          handler();
        }}
      ></input>
    </div>
  );
}
