import React from 'react'
import { useState } from 'react'
function PropertyReportsActionButton(props) {

const [test, setTest] = useState("test")

const handleChange = () => {
    setTest("remove")
}
  return (

    
    <div>
        <button onClick={
              handleChange
        }>{test}</button>
        </div>
  )
}

export default PropertyReportsActionButton