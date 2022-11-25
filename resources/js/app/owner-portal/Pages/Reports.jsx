import React from "react";
import PropertyReports from "../Components/Dashboard/PropertyReports/PropertyReports";
import { useCustomContexts } from "../../Context/ContextsProvider";
import { useState, useEffect } from "react";
import "./Styles/Reports.scss";
import AllProperty from "../Components/Dashboard/AllProperty";
import { render } from "react-dom";

const accessories = ["Fridge","Owen", "Window","Shower","Toilet","Door","Washing machine","Others"];


function Reports(props) {
    const { theme, content, userData, user, changeUserData } =
        useCustomContexts();
    const [properties, setProperties] = useState(null);
    const [report, setReport] = useState({
        rented_property_id: "",
        accessory_id: "",
        subject: "",
        details: "",
        active: 1,
    });
    useEffect(() => {
        setProperties(userData.rented_properties);
    }, []);


    const uploadReport = async () => {
        try {
            // make the AJAX request
            const response = await axios.post(
                "/api/report/store",
                {
                    report,
                    // uploaded_file: images[0].file,
                },
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            // get the (already JSON-parsed) response data
            const response_data = response.data;
        } catch (error) {
            // if the response code is not 2xx (success)
            console.log(error);
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
        // console.log(response.data)
    };

    const handleChange = (e) => {
        setReport((previous_values) => {
            return { ...previous_values, [e.target.name]: e.target.value };
        });
    };

    return (
        <div className="reports">
            <h2 className="reports__heading">Add new report</h2>
            <div className="reports__new">
                <div className="reports__new--property select-dropdown">
                    <select
                        name="rented_property_id"
                        className="property"
                        onChange={handleChange}
                    >
                        <option value="Others">Please select a property</option>

                        {userData.rented_properties
                            ? userData.rented_properties
                                  .filter((property) => {
                                      return (
                                          property.pivot.role_id == props.access
                                      );
                                  })
                                  .map((property, i) => {
                                      return (
                                          <option value={property.id} key={i}>
                                              {property.name} |{" "}
                                              {property.address.city} |{" "}
                                              {
                                                  property.address
                                                      .street_and_number
                                              }
                                          </option>
                                      );
                                  })
                            : ""}
                    </select>
                </div>
                <div className="reports__new--select select-dropdown">
                    <select name="accessory_id" onChange={handleChange}>
                        <option value="default">
                            Please select a accessory
                        </option>

                        {accessories.map((accessory,index) => {
                            return (
                                <option value={index}>
                                    {accessory}
                                </option>
                            );
                        })}

                        {/* <option value={accessories[2].id}>{accessories[2].name}</option>
                        <option value={accessories[3].id}>{accessories[3].name}</option>
                        <option value={accessories[4].id}>{accessories[4].name}</option>
                        <option value={accessories[5].id}>{accessories[5].name}</option>
                        <option value="others">{accessories[6].name}</option> */}
                    </select>
                </div>
                <div className="reports__new--text">
                    <input
                        type="text"
                        className="subject-input"
                        list="accessories"
                        name="subject"
                        onChange={handleChange}
                        placeholder="Subject"
                    />
                    <textarea
                        name="details"
                        onChange={handleChange}
                        placeholder="Details here"
                    ></textarea>
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            uploadReport();

                            // setReport({ active: 1 })
                            changeUserData();
                        }}
                    >
                        Confirm
                    </button>
                </div>
            </div>
            {/* <AllProperty/> */}
            <div className="allReports">
                <PropertyReports access={props.access} />
            </div>
        </div>
    );
}

export default Reports;
