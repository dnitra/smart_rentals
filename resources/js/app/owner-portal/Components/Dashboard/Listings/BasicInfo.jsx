import React from "react";
import BasicDropdown from "./BasicDropdown";
import InputField from "./InputField";
import "./BasicInfo.css";
import Card from "./Card";

export default function Basic({ setFormData }) {
  const selectChangeHandler = (e) => {
    setFormData((previous_values) => {
      return { ...previous_values, [e.target.name]: e.target.value };
    });
  };

  const content = {
    building: "Building:",
    state: "State:",
    type: "Type",
    surrounding: "Surrounding development:",
    location: "Location",
    protection: "Protection",
    numberOfFloors: "Number of floors:",
    numberOfUdgFloors: "Number of underground floors",
    floorLocation: "Floor location",
    wheelchairAccess: "Wheelchair access:",
    elevator: "elevator",
  };

  return (
    <Card >
      <div className="content">
        <h4>Basic Information</h4>
        <fieldset className="fieldset">
          {/* ---------------------first part of basic info------------------------- */}
          <div className="fieldset-top">
            <form>
              <div className="fieldset-dropdown">
                <label>{content.building} </label>
                <select
                  className="select"
                  name="buildingMaterial"
                  onChange={selectChangeHandler}
                >
                  <option value="">- select</option>
                  <option value="wooden">wooden</option>
                  <option value="brick">brick</option>
                  <option value="stone">stone</option>
                  <option value="mounted">mounted</option>
                  <option value="panel">panel</option>
                  <option value="skeleton">skeleton</option>
                  <option value="mixed">mixed</option>
                </select>
              </div>
              <div className="fieldset-dropdown">
                <label>{content.state} </label>
                <select
                  className="select"
                  name="stateOfProperty"
                  onChange={selectChangeHandler}
                >
                  <option value="">- select</option>
                  <option value="veryGood">Very Good</option>
                  <option value="good">Good</option>
                  <option value="bad">bad</option>
                  <option value="construction">Under Construction</option>
                  <option value="project">Project</option>
                  <option value="beforeReconstruction">
                    Before Reconstruction
                  </option>
                  <option value="afterReconstruction">
                    After Reconstruction
                  </option>
                  <option value="demolition">For Demolition</option>
                </select>
              </div>
              <div className="fieldset-dropdown">
                <label>{content.type}</label>
                <select
                  className="select"
                  name="typeOfProperty"
                  onChange={selectChangeHandler}
                >
                  <option value="">- select</option>
                  <option value="loft">Loft</option>
                  <option value="mezonet">Mezonet</option>
                  <option value="attic">Attic</option>
                </select>
              </div>
              <InputField
                type="number"
                label={content.numberOfFloors}
                name="numberOfFloors"
                value={undefined}
                setFormData={setFormData}
              />
              <InputField
                type="number"
                label={content.numberOfUdgFloors}
                name="numberOfUdgFloors"
                value={undefined}
                setFormData={setFormData}
              />
              <InputField
                type="text"
                label={content.floorLocation}
                name="floorLocation"
                value={undefined}
                setFormData={setFormData}
              />
            </form>
          </div>
          <br />
          <hr />
          <br />

          {/* ------------------------------second part of basic info-------------------------- */}
          <div className="fieldset-bottom">
            <BasicDropdown
              label={content.elevator}
              name="elevator"
              setFormData={setFormData}
            />
            <BasicDropdown
              label={content.wheelchairAccess}
              name="wheelchairAccess"
              setFormData={setFormData}
            />

            <div className="fieldset-dropdown">
              <label>{content.surrounding}</label>
              <select
                className="select"
                name="surrounding"
                onChange={selectChangeHandler}
              >
                <option value="">- select</option>
                <option value="residential">residential</option>
                <option value="commercial and residential">
                  commercial and residential
                </option>
                <option value="commercial">commercial</option>
                <option value="industrial">industrial</option>
                <option value="rural">rural</option>
                <option value="recreational">recreational</option>
              </select>
            </div>
            <div className="fieldset-dropdown">
              <label>{content.location}</label>
              <select
                className="select"
                name="location"
                onChange={selectChangeHandler}
              >
                <option value="">- select</option>
                <option value="village center">village center</option>
                <option value="edge of the village">edge of the village</option>
                <option value="busy">busy part of the village</option>
                <option value="quiet">quiet part of the village</option>
              </select>
            </div>
            <div className="fieldset-dropdown">
              <label>{content.protection}</label>
              <select
                className="select"
                name="protection"
                onChange={selectChangeHandler}
              >
                <option value="">- select</option>
                <option value="protection">protection zone</option>
                <option value="park">National Park</option>
                <option value="chko">CHKO</option>
              </select>
            </div>
          </div>
        </fieldset>
      </div>
    </Card>
  );
}
