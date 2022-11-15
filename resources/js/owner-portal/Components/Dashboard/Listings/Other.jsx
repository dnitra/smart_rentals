import React from "react";
import Card from "./Card";
import CheckBox from "./CheckBox";

export default function Other() {
  return (
    <Card className="basic-content">
      <h4>Other</h4>
      <fieldset className="fieldset">
        <label>Arranged: </label>
        <select className="select">
          <option value="">- select</option>
          <option value="yes">yes</option>
          <option value="no">no Park</option>
          <option value="partialy">partialy</option>
        </select>
        <CheckBox label="Attic" />
      </fieldset>
    </Card>
  );
}
