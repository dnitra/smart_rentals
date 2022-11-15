import React, { useEffect, useState } from "react";
import Areas from "./Areas";
import Date from "./Date";
import Energy from "./Energy";
import Other from "./Other";
import BasicInfo from "./BasicInfo";
import CheckBoxArea from "./CheckBoxArea";
import "./Property.css";

export default function Body() {
  const [formData, setFormData] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <div onSubmit={handleFormSubmit} className="body">
      <Areas setFormData={setFormData} />
      <Date setFormData={setFormData} />
      <Other setFormData={setFormData} />
      <Energy setFormData={setFormData} />
      <BasicInfo setFormData={setFormData} />
      <CheckBoxArea setFormData={setFormData} />
      <button type="submit"></button>
    </div>
  );
}
