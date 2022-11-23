import React from "react";
import BasicDropdown from "../Apartment/BasicDropdown";
import InputField from "../Apartment/InputField";
import Card from "../Apartment/Card";

export default function Areas({ setFormData }) {
    const content = {
        usable: "Usable (in m²):",
        buildUp: "Built-up area (in m²):",
        garden: "Gardens (in m²):",
        floorArea: "Floor area (in m²):",
        balcony: "Balcony (in m²):",
        loggia: "Loggia (in m²):",
        terrace: "Terrace (in m²):",
        pool: "Pool (in m²):",
        parking: "Parking space (count):",
        garage: "Garage (count):",
    };
    return (
        <Card>
            <div className="content">
                <h4>Areas</h4>
                <fieldset className="fieldset">
                    <div className="fieldset-inputs">
                        <form>
                            <InputField
                                type="text"
                                label={content.usable}
                                name="fLocation"
                                value={undefined}
                                setFormData={setFormData}
                            />
                            <InputField
                                type="text"
                                label={content.buildUp}
                                name="fxxxx"
                                value={undefined}
                                setFormData={setFormData}
                            />
                            <InputField
                                type="text"
                                label={content.garden}
                                name="fLocation"
                                value={undefined}
                                setFormData={setFormData}
                            />
                            <InputField
                                type="text"
                                label={content.floorArea}
                                name="fLocation"
                                value={undefined}
                                setFormData={setFormData}
                            />
                        </form>
                    </div>
                    <div className="fieldset-inputs">
                        <h4>Facility</h4>

                        <BasicDropdown
                            name="pool"
                            setFormData={setFormData}
                            label={content.pool}
                        />
                        <BasicDropdown
                            name="parking"
                            setFormData={setFormData}
                            label={content.parking}
                        />
                        <BasicDropdown
                            name="garage"
                            setFormData={setFormData}
                            label={content.garage}
                        />
                    </div>
                </fieldset>
            </div>
        </Card>
    );
}
