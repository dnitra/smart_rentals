import React from 'react'
import { Link } from 'react-router-dom'
// import image from "../../../../img/dashboard/Properties.svg"
import newPropertyImage from "../../../../../img/dashboard/NewProperty.svg"
import { useState, useEffect } from 'react'
function AllProperty() {
    const [allProperties, setAllProperties] = useState([])

    const loadProperties = async() => {
        const response = await axios.get('http://www.smart-rentals.test/api/property/list');
        setAllProperties(response.data)
        console.log(response.data)
    }

    useEffect(() => {

        loadProperties()
      
    }, [])
    
    

    

    return (
        <div className='properies'>
            {    
            allProperties ? (
                allProperties.map((property, i) => {
                    return (
                        <div className='property' key={i}> 
                            <div className="property__img">
                                <img src={`${property.img}`} alt="" />
                            </div>
                            <div className="property__adress">
                                <p>{property.address}</p>
                                <Link to={`/dashboard/property/${property.id}`}><button className='property__button'>Details</button></Link>
                            </div>
                        </div>)
                }
            )) : ""
                

            }
            <div className='property'>
                <div className="property__img">
                    <img src={newPropertyImage} alt="" />
                </div>
                <div className="property__adress">
                    <p></p>
                    <Link to={"/owner/properties"}><button className='property__add'>+</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AllProperty