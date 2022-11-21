import axios from "axios";
import React  from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/EditAccesses.scss"

const roles = {
    1:"Owner",
    2:"Manager",
    3:"Tenant",
    4:"Applicant"
}


export default function EditAccesses() {
    const { userData,changeUserData } = useCustomContexts();
    const [accesses, setAccesses] = useState({
        role: null,
        firstName: "",
        lastName: "",
        email:""
        
    });
    const {propertyId} = useParams()
    
    
    useEffect(() => {
        changeUserData()
        console.log(userData)
    },[])
    
    const addAccess = (e) => {
        
        try {
            const response = axios.post(`/api/property/${propertyId}/add-access`, { ...accesses })
            console.log("test")
            console.log(response)
        }
        catch (error) {
            console.log(error)
            
        }
        finally {
            changeUserData()
        }
    }

    const removeAccess = async (index) => {
    
        try {
            
            const response = await axios.post(`/api/property/${propertyId}/remove-access/${index}`)
            changeUserData()
            
        }
        catch (error) {
            console.log(error)
        }
        
        
    }
    
    //Handling adding Accesses with assigned roles to property
    const handleInput = (e)=>{
        
        setAccesses((prev_values) => {
            return { ...prev_values, [e.target.name]: e.target.value }
        })
    }
    
  

    return (
        <div className="accesses">
        
            
            <h2 className="accesses__heading">Add other people to your property</h2>
            
    
            <div className="accesses__head">
                <h3>Role</h3>
                <h3>First name</h3>
                <h3>Last name</h3>
                <h3>Email</h3>
                <h3>Action</h3>
            </div>
                
            <form className="accesses__row" onSubmit={addAccess}>
                <select required onInput={handleInput} defaultValue={""} name="role" id="addAccess">
                    <option disabled value="">Select the role</option>
                    <option  value="3">Tenant</option>
                    <option  value="2">Manager</option>
                    <option  value="1">Co-owner</option>
                </select>                
                <input onInput={handleInput} id="firstName" name="firstName" type="text" />                                                    
                <input onInput={handleInput} id="lastName" name="lastName" type="text" />                                              
                <input required onInput={handleInput} id="email" name="email" type="email" />                                        
                <button type="submit">
                    Add access
                </button>
                
            </form> 
            
        

                <h2>LIST OF ACCESSES</h2>
                <div className="accesses__head">   
                    <h3>Role</h3>
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Invitation link</h3>
                    <h3>Action</h3>
                </div>

            {
        
                userData.rented_properties?
            
                    userData.rented_properties.filter((property) => {
                        
                        
                return property.id == propertyId
                    })[0].property_accesses.map((access, index) => {
                    
                return (
                    <div className="accesses__access-detail accesses__row" key={index}>
                        <div>{roles[access.rented_property_user_role_id]}</div>
                        <div>{access.first_name} {access.last_name}</div>
                        <div> {access.email}</div>
                        <div id="link">www.smart-rentals.test/invite/{access.invite_link}</div>
                        
                        <button
                            type="button"
                            onClick={() => { removeAccess(access.id) }}
                        >
                            Remove access
                        </button>
                    </div>
                    )
                    }) : "Loading..."
                        }  
            
                  

        </div>
    )
            
}
