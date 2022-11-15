import React from "react";
import CheckBox from "./CheckBox";
import "./CheckBoxArea.css";

export default function CheckBoxArea({ setFormData }) {
  const content = {
    waterSource: "Water source",
    heatingDistrib: "Heating distribution",
    gassDistrib: "Gass distribution",
    wasteType: "Waste type",
    accessRoad: "Access road",
    telecom: "Telecommunication",
    electricity: "Electricity",
    transport: "Transport",
    lokalSource: "Lokal source",
    well: "Well",
    remoteWaterSupply: "Remote water supply",
    localGas: "Local gas:",
    centralGas: "Central gas",
    localElectric: "Local electric",
    centralSolidFuels: "Central solid fuels",
    lokalSolidFuels: "Lokal solid fuels",
    centralRemote: "Central remote",
    floor: "Floor",
    other: "Other",
    individual: "Individual",
    pipeline: "Pipeline",
    publicSewerage: "Public sewerage",
    septic: "Septic",
    sump: "Sump",
    concrete: "Concrete",
    paved: "Paved",
    asphalt: "Asphalt",
    reinforced: "Reinforced",
    gravel: "Gravel",
    telephone: "Telephone",
    internet: "Library",
    satellite: "Satellite",
    cableTv: " Cable TV",
    cableDistrib: "Cable distribution",
    others: "Others",
    voltage1: "120V",
    voltage2: "230V",
    voltage3: "400V",
    train: "Train",
    highway: " Highway",
    road: "Road",
    public: " Public transport",
  };
  return (
    <div className=" card basic-content">
      <div className="box">
        <h3>{content.heatingDistrib}</h3>
        <CheckBox
          label={content.lokalSource}
          setFormData={setFormData}
          name="lokalSource"
        />
        <CheckBox
          label={content.remoteWaterSupply}
          setFormData={setFormData}
          name="remoteWaterSupply"
        />
        <CheckBox label={content.well} setFormData={setFormData} name="well" />
      </div>
      <div className="box">
        <h3>{content.heatingDistrib}</h3>
        <CheckBox
          label={content.localGas}
          setFormData={setFormData}
          name="localGas"
        />
        <CheckBox
          label={content.centralGas}
          setFormData={setFormData}
          name="centralGas"
        />
        <CheckBox
          label={content.localElectric}
          setFormData={setFormData}
          name="localElectric"
        />
        <CheckBox
          label={content.centralElectric}
          setFormData={setFormData}
          name="centralElectric"
        />
        <CheckBox
          label={content.centralSolidFuels}
          setFormData={setFormData}
          name="centralSolidFuels"
        />
        <CheckBox
          label={content.lokalSolidFuels}
          setFormData={setFormData}
          name="lokalSolidFuels"
        />
        <CheckBox
          label={content.centralRemote}
          setFormData={setFormData}
          name="centralRemote"
        />
        <CheckBox
          label={content.floor}
          setFormData={setFormData}
          name="floor"
        />
        <CheckBox
          label={content.other}
          setFormData={setFormData}
          name="other"
        />
      </div>
      <div className="box">
        <h3>{content.gassDistrib}</h3>
        <CheckBox
          label={content.pipeline}
          setFormData={setFormData}
          name="pipeline"
        />
        <CheckBox
          label={content.individual}
          setFormData={setFormData}
          name="individual"
        />
      </div>

      <div className="box">
        <h3>{content.wasteType}</h3>
        <CheckBox
          label={content.publicSewerage}
          setFormData={setFormData}
          name="publicSewerage"
        />
        <CheckBox
          label={content.septic}
          setFormData={setFormData}
          name="septic"
        />
        <CheckBox label={content.sump} setFormData={setFormData} name="sump" />
      </div>

      <div className="box">
        <h3>{content.accessRoad}</h3>
        <CheckBox
          label={content.concrete}
          setFormData={setFormData}
          name="concrete"
        />
        <CheckBox
          label={content.paved}
          setFormData={setFormData}
          name="paved"
        />
        <CheckBox
          label={content.asphalt}
          setFormData={setFormData}
          name="asphalt"
        />
        <CheckBox
          label={content.reinforced}
          setFormData={setFormData}
          name="reinforced"
        />
        <CheckBox
          label={content.gravel}
          setFormData={setFormData}
          name="gravel"
        />
      </div>

      <div className="box">
        <h3>{content.telecom}</h3>
        <CheckBox
          label={content.telephone}
          setFormData={setFormData}
          name="telephone"
        />
        <CheckBox
          label={content.satellite}
          setFormData={setFormData}
          name="satellite"
        />
        <CheckBox
          label={content.cableTv}
          setFormData={setFormData}
          name="cableTv"
        />
        <CheckBox
          label={content.cableDistrib}
          setFormData={setFormData}
          name="cableDistrib"
        />
        <CheckBox
          label={content.others}
          setFormData={setFormData}
          name="others"
        />
      </div>

      <div className="box">
        <h3>{content.electricity}</h3>
        <CheckBox
          label={content.voltage1}
          setFormData={setFormData}
          name="120V"
        />
        <CheckBox
          label={content.voltage2}
          setFormData={setFormData}
          name="220V"
        />
        <CheckBox
          label={content.voltage3}
          setFormData={setFormData}
          name="400V"
        />
      </div>

      <h3>{content.transport}</h3>
      <CheckBox label={content.train} setFormData={setFormData} name="train" />
      <CheckBox
        label={content.highway}
        setFormData={setFormData}
        name="highway"
      />
      <CheckBox
        label={content.public}
        setFormData={setFormData}
        name="public"
      />
      <CheckBox label={content.road} setFormData={setFormData} name="road" />
    </div>
  );
}
