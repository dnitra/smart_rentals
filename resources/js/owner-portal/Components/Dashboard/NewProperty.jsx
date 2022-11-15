import React from 'react'
import newPropertyImage from "../../../../img/dashboard/NewProperty.svg"
import { Link } from 'react-router-dom'
function NewProperty() {



  return (
      
            <div className='property'>
                <div className="property__img">
                  <img src={newPropertyImage} alt="" />
                </div>
                <div className="property__adress">
                    <p></p>
                    <Link to={"/"}><button className='property__button-add'>ADD NEW</button></Link>
                </div>
            </div>
       
  )
}

export default NewProperty