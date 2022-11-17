import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/SelectedPropertyDetails.scss'
import image from "../../../../img/dashboard/Property.svg"
import { useState, useEffect } from 'react'

const SelectedPropertyDetails = () =>{
    const [propertyDetails, setPropertyDetails] = useState([])
    const [detailsShown, setDetailsShown] = useState(false)
    const [active, setActive] = useState(false)
    console.log(active)
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
    }, [])
        

  return (
    <>
          {propertyDetails ? (
              propertyDetails.map((propertyDetail,key) => {
               return(
                   <div className='property' key={key}>
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
                               <div className="property__about-details tab">
                               <button 
                                className={'tab__links' + (active === 'cashflow' ? '--active' : '' )} 
                                onClick={() => {
                                    setDetailsShown('Cashflow')
                                    setActive('cashflow')
                                }}>Cashflow</button>

                                <button 
                                className={'tab__links' + (active === 'bills' ? '--active' : '')}
                                onClick={() => { 
                                    setDetailsShown('Bills')
                                    setActive('bills') 
                                }}>Bills</button>

                                <button 
                                className={'tab__links' + (active === 'reports' ? '--active' : '')}
                                onClick={() => {
                                    setDetailsShown('Reports')
                                    setActive('reports') 
                                }}>Reports</button>
                           </div>
                               {(() => {
                                switch(detailsShown){
                                    case 'Cashflow': 
                                    return(
                                        <>
                                            <div id="Cashflow" className="tab__content">
                                                <p>Cashflow</p>
                                            </div>
                                        </>
                                    )
                                    case 'Bills':
                                        return (
                                            <>
                                                <div id="Bills" className="tab__content">
                                                    <p>Bills</p>
                                                </div>
                                            </>
                                        )
                                    case 'Reports':
                                        return (
                                            <>
                                                <div id="Reports" className="tab__content">
                                                    <p>Reports</p>
                                                </div>
                                            </>
                                        )
                                    default: 
                                        ""
                                }
                               })()}
                            </div>
                        </div>
                    </div>)
              })
            ) : "error"
          }
    </>
  )
}

export default SelectedPropertyDetails