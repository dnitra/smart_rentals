import { set } from 'lodash';
import React from 'react'
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { useCustomContexts } from '../../../../Context/ContextsProvider';
import "../../../Pages/Styles/AllProperties.scss"
const PropertyReports = (props) => {
    const { user, userData, changeUserData } = useCustomContexts();
    const [status, setStatus] = useState([])
    const [deleteCurrnetReport, setDeleteCurrnetReport] = useState([])
    const [done, setDone] = useState("Done")
    // console.log(done)
    useEffect(() => {
        //load all the user data with all of his database data to userContext as userData variable
        changeUserData();
        console.log(userData)

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

        //    window.location.reload();
    }, [deleteCurrnetReport])

    const deleteItem = () => {
        deleteReport()
    }

    const handleClick = () => {
        setDone("delete")
    }
    // const userReports = async() => {

    //     const user_id = userData.id
    //     console.log(user_id)
    //     const response = await axios.post(
    //         "/api/report/user-reports",
    //         {
    //             id : user_id
    //         },
    //         {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         }
    //     );
    //     const data = response.data
    // }



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
        // console.log(response.data)
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
        // console.log(response.data)
    }

    // useEffect(() => {
    //     setDeleteCurrnetReport([])
    // }, [])


    return (

        <div className="properies">
            {userData.rented_properties ? userData.rented_properties.filter((property) => {
               
                    return property.pivot.role_id == props.access
               
            }).map((property, i) => {
                return (
                    property.reports.length > 0 ? (
                        <div className="property property__report-container" key={i}>
                            <div className="property__adress">
                                <p>{property.address.street_and_number}</p>
                                <p>{property.address.city}</p>
                            </div>
                            <div className='property__reports'>
                                {property.reports.map((report, i) => {

                                    if (report.active != "0") {
                                        return (
                                            <div className={done == "done" ? "property__reports--container done" : "property__reports--container"} key={i}>
                                                <div>
                                                    <p className='title'>Accesory:</p>
                                                    <p>{report.accessory_id}</p>
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
                                                    <p>{report.accessory_id}</p>
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
                )
            }) : ""
            }
        </div>
    )
}


export default PropertyReports


