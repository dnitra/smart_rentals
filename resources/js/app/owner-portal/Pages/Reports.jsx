import React from 'react'
import PropertyReports from '../Components/Dashboard/PropertyReports/PropertyReports'
import { useCustomContexts } from '../../Context/ContextsProvider'
import { useState,useEffect } from 'react'

function Reports() {

    const { theme, content, userData } = useCustomContexts();

    // console.log(userData)
    const [properties, setProperties] = useState(null)
    const [report, setReport] = useState({
        rented_property_id : "",
        accessory_id : "",
        subject : "",
        details: "",
        active: 1
    })
  
    useEffect(() => {
        setProperties(userData.rented_properties)
       
    }, [])


    // console.log(userData.rented_properties)
    const accessories = {
        1 : {id: "1",
            name: "Shower"
        }, 
        2: {
            id: "2",
            name: "TV"
        }, 
        3: {
            id: "3",
            name: "Frige"
        }, 
        4: {
            id: "4",
            name: "Light"
        }, 
        5: {
            id: "5",
            name: "Window"
        }, 
    }

    useEffect(() => {
      console.log(report)
    }, [report])

    const uploadReport = async() => {
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
    }

    
    const handleChange = (e) => {
        setReport((previous_values)=>{
            return { ...previous_values, [e.target.name]:e.target.value}
        })
    }

    return (
        <>
        <div className='reports'>
            <div className="reports__property">
                <select name="rented_property_id" className='property' onChange={handleChange}>      
                    <option value='default' selected> --- Choose a property </option>
                    {userData.rented_properties ? (
                        userData.rented_properties.map(property => {
                        return(
                            <option value={property.id}>
                                {property.name} | {property.address.city} | {property.address.street_and_number}
                            </option>
                        )
                    })) : ""
                }
            </select>
            </div>
            <div className="reports__select">
                
                <select name="accessory_id" onChange={handleChange}>         
                    <option value={accessories[1].id}>{accessories[1].name}</option>
                    <option value={accessories[2].id}>{accessories[2].name}</option>
                    <option value={accessories[3].id}>{accessories[3].name}</option>
                    <option value={accessories[4].id}>{accessories[4].name}</option>
                    <option value={accessories[5].id}>{accessories[5].name}</option>
                    <option value={"other"}>Others</option>
            </select>
                <input type="text" list="accessories" name='subject' onChange={handleChange} />
                <textarea name='details' onChange={handleChange}></textarea>
            </div>
            <button onClick={(e) => {
                e.preventDefault()
                uploadReport()
            }}>Confirm</button> 
        </div>
        <div className="allReports"><PropertyReports/></div> 
        </>
    )
}

export default Reports



//     (report.choosedProperty && report.accessory && report.subject && report.desctiption) ? (
//                     return (
//     <div>
//         <p className='success-message'>was saved!</p>
//     </div>
// ))  : ""