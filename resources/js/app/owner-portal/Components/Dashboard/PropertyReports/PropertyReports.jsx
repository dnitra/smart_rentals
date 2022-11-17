import React from 'react'
import { useState, useEffect } from 'react';
const PropertyReports = () => {

    const [allProperties, setallProperties] = useState([])
    const [propertiesWithReports, setPropertiesWithReports] = useState([])
    
    const testAllProperties = [
        {
            unitId: "1" ,
            reports : {
                bathrooms : "ucpana",
                toilet: "tece"
            }
        },

        {
            unitId: "2",
            reports: {
                dvere: "zlomeny",
                kuchyn: "nefunguje mycka"
            }
        },

        {
            unitId: "3",
            reports: {
                televize: "nefunguje",
                ventilace: "nejde zapnout"
            }
        }, 

        {
            unitId: "4",
            report: false
        }
    ]

    useEffect(() => {
        setallProperties(testAllProperties)
        console.log(testAllProperties)
    }, [])


    // allProperties.map(property => {
    //     setPropertiesWithReports[{...propertiesWithReports, {property.id, property.reports}}]
    // })
   


    
    
  return (
    <div className='reports'>
        {/* {
            reports ? (
                reports.map((report, key) => {
                    return(
                        <div className="reports__name">{report.name}</div>
                    )
                 }) 
            ):""
        } */}
    </div>
  )
}

export default PropertyReports