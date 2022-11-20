import React from 'react'
import { useState, useEffect } from 'react';
import { useCustomContexts } from '../../../../Context/ContextsProvider';
const PropertyReports = () => {
  const { theme, content, userData } = useCustomContexts();

  console.log(userData)
  //   let propertyArray = []
  //   // userData.reports.map(report => {

  //   //   // console.log(report.rented_property.name)

  

    
  //     userData.rented_properties.map(property => {
  //       console.log(property.id) 
  //       propertyArray.push(property.id)
  //     })

  //   // })
  //     console.log(propertyArray)
  


  return (
    <div className='reports'>
       {
       userData ? (
          userData.reports.map(report => {
            return(
              <>
              <div className="reports__property">
                {report.rented_property.name} 
              <div>
                {userData.rented_properties.map(property => {

                  return ( 
                    <div> 
                        {property.id === report.rented_property.id ? (
                        <div>
                          {property.address.city}, {property.address.street_and_number}
                        </div>)
                        : ""}
                     </div>
                  )
                }
                  
                )} 
                </div>
                Accessory id: {report.accessory_id}, subject: {report.subject}, details: {report.details}
              </div><br />
              </>
            )
          })
       ) : ""
       }
    </div>
  )
}

export default PropertyReports