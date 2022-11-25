import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCustomContexts } from "../../../app/Context/ContextsProvider";
import ImageUploading from "react-images-uploading";
import "./Styles/EditProperty.scss";
import { useNavigate, useRouteLoaderData } from "react-router-dom";

export default function Properties() {
    // setting states
    const [propertyId, setPropertyId] = useState(null);
    const { theme, content, userData, changeUserData } = useCustomContexts();
    const [images, setImages] = useState([]);
    const [amountOfAccesses, setAmountOfAccesses] = useState([true]);
    const [emails, setEmails] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        country: "1",
        city: "",
        type: "1",
        subtype: "1",
    });
    const maxNumber = 10;

    // Handling selecting images changes
    const handleImageChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    // Handling inputs changes
    const handleInputChange = (event) => {
        setFormData((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    // const insertedPropertyId = () => {
    //     return userData.rented_properties.pop().id;
    // };

    // handling submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        // console.log(event);

        // create new array with the data I want to send to backend
        const imagesArray = images.map((imgObject) => imgObject.file);

        try {
            // make the AJAX request
            const response = await axios.post(
                "/api/property/store",
                {
                    // Object to send
                    ...formData,
                    uploaded_images: imagesArray,
                },
                {
                    // Options
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // get the (already JSON-parsed) response data
            const propertyId = await response.data.property.id;

            if (propertyId) {
                window.location.assign(
                    `/owner/property/${propertyId}/accesses`
                );
            }
        } catch (error) {
            console.log(error);
            // if the response code is not 2xx (success)
            // console.log(error);
            switch (error.response.status) {
                case 422:
                    // handle validation errors here
                    console.log(
                        "VALIDATION FAILED:",
                        error.response.data.errors
                    );
                    break;
                case 500:
                    console.log("UNKNOWN ERROR", error.response.data);
                    break;
            }
        }
    };

    useEffect(() => {
        setFormData((previous_values) => {
            return {
                ...previous_values,
                property_access_emails: emails,
            };
        });
    }, [emails]);

    useEffect(() => {
        console.log(amountOfAccesses);
    }, [amountOfAccesses]);

    // useEffect(() => {
    //     navigate(`/owner/property/${propertyId}/accesses`);
    // }, [propertyId]);
    // console.log(propertyId);

    return (
        <>
            <form className="property-form" onSubmit={handleSubmit}>
                <h2 className="property-form__heading">Create New Property</h2>

                {/* ---------------------------------- SELECT ADDRESS  ---------------------------------- */}
                <label className="property-form__label" htmlFor="city">
                    City:
                </label>
                <input
                    className="property-form__input"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                />

                <label className="property-form__label" htmlFor="country">
                    Country:
                </label>

                <select
                    className="property-form__input"
                    id="type"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                >
                    <option value="57">Czech Republic</option>
                    <option value="191">Slovakia</option>
                    <option value="82">Germany</option>
                </select>

                <label className="property-form__label" htmlFor="address">
                    Street:
                </label>
                <input
                    className="property-form__input"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                />

                <label className="property-form__label" htmlFor="price">
                    Monthly price (CZK):
                </label>
                <input
                    className="property-form__input"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                />
                <label className="property-form__label" htmlFor="name">
                    Name of the property (optional):
                </label>
                <input
                    autoComplete="nope"
                    className="property-form__input"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                {/* ---------------------------------- SELECT CATEGORY  ---------------------------------- */}
                <label className="property-form__label" htmlFor="type">
                    {content.category}
                </label>
                <select
                    className="property-form__input"
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                >
                    <option value="1">{content.type1}</option>
                    <option value="2">{content.type2}</option>
                    <option value="3">{content.type3}</option>
                    <option value="4">{content.type4}</option>
                </select>

                {formData.type === "1" ? (
                    <>
                        <label
                            className="property-form__label"
                            htmlFor="subtype-flat"
                        >
                            {content.subCategory}
                        </label>
                        <select
                            className="property-form__input"
                            name="subtype"
                            id="subtype-flat"
                            value={formData.subtype}
                            onChange={handleInputChange}
                        >
                            <option value="1">{content.subTypeFlat1}</option>
                            <option value="3">{content.subTypeFlat2}</option>
                            <option value="2">{content.subTypeFlat3}</option>
                            <option value="4">{content.subTypeFlat4}</option>
                            <option value="5">{content.subTypeFlat5}</option>
                            <option value="6">{content.subTypeFlat6}</option>
                            <option value="7">{content.subTypeFlat7}</option>
                            <option value="8">{content.subTypeFlat8}</option>
                            <option value="9">{content.subTypeFlat9}</option>
                            <option value="10">{content.subTypeFlat10}</option>
                            <option value="11">{content.subTypeFlat11}</option>
                            <option value="12">{content.subTypeFlat12}</option>
                            <option value="13">{content.subTypeFlat13}</option>
                        </select>
                    </>
                ) : formData.type === "2" ? (
                    <>
                        <label
                            className="property-form__label"
                            htmlFor="subtype-house"
                        >
                            {content.subCategory}
                        </label>
                        <select
                            className="property-form__input"
                            name="subtype"
                            id="subtype-house"
                            value={formData.subtype}
                            onChange={handleInputChange}
                        >
                            <option value="1">{content.subTypeHouse1}</option>
                            <option value="2">{content.subTypeHouse2}</option>
                            <option value="3">{content.subTypeHouse3}</option>
                            <option value="4">{content.subTypeHouse4}</option>
                        </select>

                        <select
                            className="property-form__input"
                            name="rooms"
                            id="rooms"
                            value={formData.rooms}
                            onChange={handleInputChange}
                        >
                            <option value="1">{content.rooms1}</option>
                            <option value="2">{content.rooms2}</option>
                            <option value="3">{content.rooms3}</option>
                            <option value="4">{content.rooms4}</option>
                            <option value="5">{content.rooms5}</option>
                            <option value="6">{content.rooms6}</option>
                        </select>
                    </>
                ) : formData.type === "3" ? (
                    <>
                        <label
                            className="property-form__label"
                            htmlFor="subtype-commercial"
                        >
                            {content.subCategory}
                        </label>
                        <select
                            className="property-form__input"
                            name="subtype"
                            id="subtype-commercial"
                            value={formData.subtype}
                            onChange={handleInputChange}
                        >
                            <option value="1">
                                {content.subTypeCommercial1}
                            </option>
                            <option value="2">
                                {content.subTypeCommercial2}
                            </option>
                            <option value="3">
                                {content.subTypeCommercial3}
                            </option>
                            <option value="4">
                                {content.subTypeCommercial4}
                            </option>
                        </select>
                    </>
                ) : formData.type === "4" ? (
                    <>
                        <label
                            className="property-form__label"
                            htmlFor="subtype-others"
                        >
                            {content.subCategory}
                        </label>
                        <select
                            className="property-form__input"
                            name="subtype"
                            id="subtype-others"
                            value={formData.subtype}
                            onChange={handleInputChange}
                        >
                            <option value="1">{content.subTypeOthers1}</option>
                            <option value="2">{content.subTypeOthers2}</option>
                            <option value="3">{content.subTypeOthers3}</option>
                            <option value="4">{content.subTypeOthers4}</option>
                        </select>
                    </>
                ) : null}

                {/* ---------------------------------------- IMAGE UPLOADING ---------------------------------- */}
                <label>Add images:</label>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={handleImageChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        <>
                            {/* <label>Upload your images:</label> */}
                            <div className="upload__image-wrapper">
                                <button
                                    className="property-form__button property-form__button_images"
                                    type="button"
                                    style={
                                        isDragging
                                            ? { color: "red" }
                                            : undefined
                                    }
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Click or Drop here
                                </button>
                                &nbsp;
                                <button
                                    type="button"
                                    className="property-form__button property-form__button_images"
                                    onClick={onImageRemoveAll}
                                >
                                    Remove all images
                                </button>
                                <div className="property-form__image-container">
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img
                                                src={image["data_url"]}
                                                alt=""
                                                width="100"
                                            />
                                            <div className="image-item__btn-wrapper">
                                                <button
                                                    type="button"
                                                    className="property-form__button property-form__button_images"
                                                    onClick={() =>
                                                        onImageUpdate(index)
                                                    }
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    type="button"
                                                    className="property-form__button property-form__button_images"
                                                    onClick={() =>
                                                        onImageRemove(index)
                                                    }
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </ImageUploading>

                {/* -------------------------------------------------------------------------- */}

                <button className="property-form__button" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}
