import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/SelectedPropertyDetails.scss'
import image from "../../../../img/dashboard/Property.svg"
import { useState, useEffect } from 'react'

function SelectedPropertyDetails() {
    const [propertyDetails, setPropertyDetails] = useState([])
    const [detailsShown, setDetailsShown] = useState(false)
    const data = [
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 1, 
            name: "Down Town Luxury Village",
            year:1995, 
            bedrooms: 3, 
            bathrooms: 2,
            squre: 125, 
            kitchen: 1,
            parking:1,
            tenant:"Maxim Khromov",
            about: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
        },]
    
    useEffect(() => {
        setPropertyDetails(data)
        console.log(data)
    }, [])
        

  return (
    <div className='property'>
        
          {propertyDetails ? (
              propertyDetails.map(propertyDetail => {
               return( <>
                  <div className="property__info">
                    <div className="property__info-img">
                          <img src={propertyDetail.img} alt="property_preview" />
                    </div>
                        <div className="property__info-details">
                            <div className="property__info-details-top">
                              <h2>{propertyDetail.name}</h2>
                              <p>{propertyDetail.address}</p>    
                            </div>
                          <div className="property__info-details-buttom">
                              <div className="property__info-details-buttom-left">
                                <h3>{propertyDetail.squre}m2</h3>
                                <h4>Apartment area</h4>
                              </div>
                              <div className="property__info-details-buttom-right">
                                  <h3>Tenant</h3>
                                  <h4>{propertyDetail.tenant}</h4>
                              </div>
                          </div>
                        </div>
                  </div>

                  <div className="property__about">
                    <h2>About property</h2>
                        
                    <div className="property__about-details">
                           <div class="tab">
                               <button class="tablinks" onClick={() => {setDetailsShown('Cashflow')}}>Cashflow</button>
                               <button class="tablinks" onClick={() => {setDetailsShown('Bills') }}>Bills</button>
                               <button class="tablinks" onClick={() => {setDetailsShown('Reports') }}>Reports</button>
                           </div>
                           {/* { () => { return <p>LOL</p>
                            // switch (detailsShown) {
                            //     case value:
                            //         return
                            //         break;
                            
                            //     default:
                            //         break;
                            // }
                            // return 'lol'
                            }()
                           } */}
                           {detailsShown == 'Cashflow' ?
                                <><div id="Cashflow" class="tabcontent">
                               <p>Cashflow</p>
                        
                           </div></>
                           :
                           <></>
                        }

                           {/* <div id="Bills" class="tabcontent">
                               <p>Bills</p>
                           </div>

                           <div id="Reports" class="tabcontent">
                               <p>Reports</p>
                           </div> */}
                    </div>
                  </div>
                 
               </>)
              })
            ) : "error"
          }
    </div>
  )
}

export default SelectedPropertyDetails