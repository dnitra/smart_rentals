import { set } from 'lodash';
import React from 'react'
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useCustomContexts } from '../../../../Context/ContextsProvider';
import "../../../Pages/Styles/AllProperties.scss"

const accessories = ["Fridge", "Owen", "Window", "Shower", "Toilet", "Door", "Washing machine", "Others"];
function SelectedPropertyReports(props) {
    const { user, userData, changeUserData } = useCustomContexts();
    const [status, setStatus] = useState([])
    const [deleteCurrnetReport, setDeleteCurrnetReport] = useState([])
    const [done, setDone] = useState("Done")

    const currentProperty = userData.rented_properties.filter((property) => {
        return property.id == props.id
    })
    // console.log(currentProperty[0])

    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
        // console.log(userData)

    }, []);

    useEffect(() => {
        if (userData.length > 0) {
            userReports()
        }
    }, [])


    useEffect(() => {
        if (status.length >= 1) {
            uploadStatus()
            changeUserData();
        }
    }, [status])

    useEffect(() => {

        if (deleteCurrnetReport.length >= 1) {
            deleteReport()
            changeUserData();
        }

    }, [deleteCurrnetReport])

    const deleteItem = () => {
        deleteReport()
    }

    const handleClick = () => {
        setDone("delete")
    }


    const uploadStatus = async () => {
        try {
            // make the AJAX request
            const response = await axios.post(
                "/api/report/status",
                {
                    status,
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
    }

    const deleteReport = async () => {
        try {
            // make the AJAX request
            const response = await axios.post(
                "/api/report/deleteReport",
                {
                    deleteCurrnetReport,
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
    }

    return (

        <div className="properies currentPropertyDetails">

                   { currentProperty[0].reports.length > 0 ? (
                        <div className="property property__report-container ">

                            <div className='property__reports'>
                                {currentProperty[0].reports.map((report, i) => {

                                    if (report.active != "0") {
                                        return (
                                            <div className={done == "done" ? "property__reports--container done" : "property__reports--container"} key={i}>
                                                <div>
                                                    <p className='title'>Accesory:</p>
                                                    <p>{accessories[report.accessory_id]}</p>
                                                </div>
                                                <div>
                                                    <p className='title'>Subject:</p>
                                                    <p>{report.subject}</p>
                                                </div>
                                                <div>
                                                    <p className='title'>Detils:</p>
                                                    <p>{report.details}</p>
                                                </div>
                                                <button className='report-button' onClick={() => {
                                                    setStatus([
                                                        { id: report.id, active: "0" }
                                                    ])
                                                    handleClick()
                                                }

                                                }>Done</button>
                                            </div>
                                        )

                                    } else {

                                        return (
                                            <div className='property__reports--container done' key={i}>
                                                <div>
                                                    <p>Accesory:</p>
                                                    <p>{accessories[report.accessory_id]}</p>
                                                </div>
                                                <div>
                                                    <p>Subject:</p>
                                                    <p>{report.subject}</p>
                                                </div>
                                                <div>
                                                    <p>Detils:</p>
                                                    <p>{report.details}</p>
                                                </div>
                                                <button className='report-button' onClick={() => {
                                                    setDeleteCurrnetReport([
                                                        { id: report.id }
                                                    ])
                                                }}>Delete</button>
                                            </div>
                                        )

                                    }

                                   


                                })}
                            </div>
                        </div>

                    ) : ""
                }
            
        </div>
    )
}

export default SelectedPropertyReports