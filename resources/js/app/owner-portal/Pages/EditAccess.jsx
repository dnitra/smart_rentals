import axios from "axios";
import React  from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/EditAccesses.scss"
import { set } from "lodash";

const roles = {
    1:"Owner",
    2:"Manager",
    3:"Tenant",
    4:"Applicant"
}

const accessesData = {
        role: "",
        firstName: "",
        lastName: "",
        email:""
        
    }


export default function EditAccesses() {
    const { userData,changeUserData } = useCustomContexts();
    const [accesses, setAccesses] = useState(accessesData);
    const { propertyId } = useParams()
    const [errors,setErrors] = useState(accessesData)
    
  
    useEffect(() => {
        changeUserData()
        console.log(userData)
    },[])


    const validation = () => {
        if (accesses.email == "" ) {
            
            setErrors((prev_values) => {
                return {...prev_values,email:"error__required"}
            })
        }
        else {
            setErrors((prev_values) => {
                return {...prev_values,email:""}
            })
        }
        if(accesses.role == ""){
            
           setErrors((prev_values) => {
                return {...prev_values,role:"error__required"}
            })
        }
        else {
            setErrors((prev_values) => {
                return {...prev_values,role:""}
            })
        }


    }
    const addAccess = (e) => {

        console.log(accesses)
        console.log(errors)
        
        if (accesses.role !== "" && accesses.email !== "") {

        try {
            const response = axios.post(`/api/property/${propertyId}/add-access`, { ...accesses })
            changeUserData()
            console.log("test")
            setAccesses(accessesData)
        }
        catch (error) {
            console.log(error)
        }
            }
    }

    const removeAccess = async (index) => {
    
        try {
            
            const response = await axios.post(`/api/property/${propertyId}/remove-access/${index}`)
            
            
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
            
            <form action="">
            <div className="accesses__head">
                <h3>Role</h3>
                <h3>First name</h3>
                <h3>Last name</h3>
                <h3>Email</h3>
                <h3>Action</h3>
            </div>
                
            <div  className="accesses__row" >
                <select
                    onInput={handleInput}
                    defaultValue={""}
                    name="role"
                    id="addAccess"
                    value={accesses.role}
                    className={errors.role}
                >
                    <option disabled value="">Select the role</option>
                    <option  value="3">Tenant</option>
                    <option  value="2">Manager</option>
                    <option  value="1">Co-owner</option>
                </select>                
                <input onInput={handleInput} autoComplete="given-name" name="firstName" type="text" value={accesses.firstName} />                                                    
                <input onInput={handleInput} autoComplete="family-name" name="lastName" type="text" value={accesses.lastName} />                                              
                <input
                    onInput={handleInput}
                    autoComplete="email"
                    name="email"
                    type="email"
                    value={accesses.email}
                    className={errors.role}/>                                        
                <button
                    onClick={() => {
                        validation()
                        addAccess()
                        changeUserData()
                            }}
                    type="button">
                    Add access
                </button>
                
            </div> 
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
                            onClick={() => {
                                removeAccess(access.id)
                                changeUserData()
                            }}
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
