import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCustomContexts } from "../../Context/ContextsProvider"

import "./Styles/Invitation.scss"

const roles = {
    1:"Owner",
    2:"Manager",
    3:"Tenant",
    4:"Applicant"
}

export default function Invitation() {

    const { content} = useCustomContexts()
    
    const { linkId } = useParams()

    const[data,setData]= useState({})
    

    useEffect(() => {
        loadProperty()
    },[])
    const loadProperty = async () => {
                
        const response = await axios.get(`/api/invite/${linkId}`)
        const data = response.data
        console.log(data)
        setData(data)
    }
        console.log(data)
    return (
        data ?
            
        <div className="invitation">
            <h1>Invitation</h1>
                <div>You have been invited to become <strong style={{ fontSize: "1.5em" }}> {roles[data.rented_property_user_role_id]} </strong> at THIS apartment</div>
            <br />
            <h3>Please check your details: </h3>
            <label htmlFor="firstName">First name</label>
            <input id="firstName" name="firstName" type="text" value={data.first_name} />
            <label htmlFor="lastName">Last name</label>
            <input id="lastName" name="lastName" type="text" value={data.last_name} />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="text" value={data.email} />
                <br />
                <br />
                <button onClick={() => {
                window.location.assign(`/register/${linkId}`)
            }}>Continue</button>
            
        </div>:"Loading"
    )
}