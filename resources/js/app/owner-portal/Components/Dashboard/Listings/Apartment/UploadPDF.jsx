import React, { useState } from "react";

export default function UploadPDF() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [formDataListings, setformDataListings] = useState([]);

    const changeHandler = (e) => {
        setIsFilePicked((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });

        const handleSubmission = async (e) => {
            e.preventDefault();
            const response = await axios.post(
                "",
                { formDataListings },
                { headers: { "Content-type": "form-data" } }
            );
        };
    };

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            {isSelected ? (
                <div>
                    <p>Filename: {selectedFile.name}</p>
                    <p>Filetype: {selectedFile.type}</p>
                    <p>Size in bytes: {selectedFile.size}</p>
                    <p>
                        lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}
                    </p>
                </div>
            ) : (
                <p>Select a file to show details</p>
            )}
            <div>
                <button onClick={handleSubmission}>Submit</button>
            </div>
        </div>
    );
}
