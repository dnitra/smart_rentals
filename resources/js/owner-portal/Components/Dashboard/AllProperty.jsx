import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../../../img/dashboard/Properties.svg"
import newPropertyImage from "../../../../img/dashboard/NewProperty.svg"
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
    
    

    const properties = [
      {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id : 1

        }, 
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 2
        }, 
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 3
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 4
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 5
        },
        {
            img: image,
            address: "byt č. 4, Žižkova, Nové Město",
            id: 6
        },


    ]

    return (
        <div className='properies'>
            {    
            properties ? (
                properties.map((property, i) => {
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
                    <Link to={"/"}><button className='property__add'>+</button></Link>
                </div>
            </div>
        </div>
    )
}

export default AllProperty