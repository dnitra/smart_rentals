import React from "react";
import Card from "../Apartment/Card";
import InputField from "../Apartment/InputField";
import "../Apartment/Areas.css";
export default function AreasLand({ setFormData }) {
    const content = {
        land: "Land (in m²):",
    };
    return (
        <Card>
            <div className="areas-content">
                <h4 className="h4">Land area</h4>
                <fieldset className="fieldset">
                    <div className="fieldset-inputs">
                        <form>
                            <InputField
                                type="text"
                                label={content.land}
                                name="landArea"
                                value={undefined}
                                setFormData={setFormData}
                            />
                        </form>
                    </div>
                </fieldset>
            </div>
        </Card>
    );
}
