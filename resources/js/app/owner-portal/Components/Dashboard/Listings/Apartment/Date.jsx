import React from "react";
import Card from "./Card";
import DateInput from "./DateInput";
import "./Date.css";

export default function Date({ setFormData }) {
    const content = {
        sale: "Sale:",
        movingIn: "Moving in:",
        commencement: "Construction Commencement:",
        endOfConstruction: "EndOfConstruction:",
        visitFrom: "Visit from:",
        visitTo: "Visit to:",
        constructYear: "Year of construction:",
        approvalYear: "Year of approval:",
        reconstructionYear: "Year of reconstruction:",
    };
    return (
        <Card>
            <div className="date-content">
                <h4 className="h4">Date</h4>
                <fieldset className="fieldset">
                    <div className="fieldset-date">
                        <DateInput
                            label={content.sale}
                            name="saleDate"
                            value={undefined}
                            setFormData={setFormData}
                        />
                        <DateInput
                            label={content.movingIn}
                            name="movingIn"
                            value={undefined}
                            setFormData={setFormData}
                        />
                        <DateInput
                            label={content.commencement}
                            name="commencement"
                            value={undefined}
                            setFormData={setFormData}
                        />
                        <DateInput
                            label={content.endOfConstruction}
                            name="endOfConstruction:"
                            value={undefined}
                            setFormData={setFormData}
                        />
                        <DateInput
                            label={content.visitFrom}
                            name="visitFrom:"
                            value={undefined}
                            setFormData={setFormData}
                        />
                        <DateInput
                            label={content.visitTo}
                            name="visitTo:"
                            value={undefined}
                            setFormData={setFormData}
                        />

                        <DateInput
                            type="text"
                            label={content.constructYear}
                            name="constructYear"
                            value={undefined}
                            setFormData={setFormData}
                        />
                        <DateInput
                            type="text"
                            label={content.approvalYear}
                            name="approvalYear"
                            value={undefined}
                            setFormData={setFormData}
                        />
                        <DateInput
                            type="text"
                            label={content.reconstructionYear}
                            name="Year of reconstruction"
                            value={undefined}
                            setFormData={setFormData}
                        />
                    </div>
                </fieldset>
            </div>
        </Card>
    );
}
