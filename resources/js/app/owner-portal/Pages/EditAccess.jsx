import axios from "axios";
import React  from "react";
import { useCustomContexts } from "../../Context/ContextsProvider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Styles/EditAccesses.scss"
import { Link } from "react-router-dom";
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
    const [errors, setErrors] = useState(accessesData);
    const [response,setResponse] = useState("")
    
  
    useEffect(() => {
       changeUserData()
        console.log(userData)
    }, [])
    
    useEffect(() => {
       
        console.log(userData)
    },[userData])


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


    const sendInvitation = async (accessId) => {
    
        try {
            
            const response = await axios.post(`/api/invite/sendEmail/${accessId}`)
            console.log(response)
           
            await setResponse(response)
            
        }
        catch (error) {
            console.log(error)
            setResponse("Something went wrong")
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
        
        <div className="accesses__form " >
            <h2 className="accesses__heading">Add other people to your property</h2>
            
            <form action="">
                
            <div  className="accesses__row" >
                        
                <div className="select__row-1">
                            <div className="accesses__row-header">
                                <h3>Role</h3>
                            </div>  
                            <div className="select-dropdown">
                                <select 
                                    onInput={handleInput}
                                    defaultValue={""}
                                    name="role"
                                    id="addAccess"
                                    className={errors.role}
                                >   
                                    <option disabled value="">Select the role</option>
                                    <option  value="3">Tenant</option>
                                    <option  value="2">Manager</option>
                                    <option  value="1">Co-owner</option>
                                </select>   
                                </div>      
                </div>
                <div className="select-input">
                    <h3>First name</h3>             
                        <input onInput={handleInput} autoComplete="given-name" name="firstName" type="text" value={accesses.firstName} className="subject-input"/>     
                    <h3>Last name</h3>                                               
                        <input onInput={handleInput} autoComplete="family-name" name="lastName" type="text" value={accesses.lastName} className="subject-input" />      
                    <h3>Email</h3>                                        
                <input
                    onInput={handleInput}
                    autoComplete="email"
                    name="email"
                    type="email"
                    value={accesses.email}
                    className={`${errors.role} subject-input`}/>                                        
                <br />
                <button
                    onClick={() => {
                        validation()
                        addAccess()
                        changeUserData()
                            }}
                    type="button"
                    className="log-button">
                    Add access
                </button>
                            <Link to={"/owner/dashboard/all"}>
                                <button
                                    type="button"
                                    className="log-button">
                                    skip
                                </button>
                </Link>
               
            </div>
                
            </div> 
            </form>
            </div>
        
            <div className="accesses__list">           
                <h2>LIST OF ACCESSES</h2>

            {
        
                userData.rented_properties?
            
                    userData.rented_properties.filter((property) => {
                        
                
                return property.id == propertyId
                    })[0].property_accesses.map((access, index) => {
                    
                return (
                    <div className="accesses__access-detail accesses__row" key={index}>
                        <h3>Role</h3>
                        <div>{roles[access.rented_property_user_role_id]}</div>
                        <h3>Name</h3>
                        <div>{access.first_name} {access.last_name}</div>
                        <h3>Email</h3>
                        <div> {access.email}</div>
                        <h3>Invitation link</h3>
                        <div id="link">https://smart-rentals.codeboot.cz/invite{access.invite_link}</div>
                        
                        <button
                            type="button"
                            className="log-button"
                            onClick={() => {
                                removeAccess(access.id)
                                changeUserData()
                            }}
                        >
                            Remove access
                        </button>
                        {response?
                            response.data ?
                                (response.data.id==access.id)?
                                "Message was sent successfully!"
                                :
                            <button
                                type="button"
                                className="log-button"
                                    onClick={() => {
                                    setResponse(true)
                                    sendInvitation(access.id)
                                }}
                            >
                                Send Invitation
                            </button>
                            :"Loading" : (response) ?
                                <button
                                type="button"
                                className="log-button"
                                    onClick={() => {
                                    setResponse(true)
                                    sendInvitation(access.id)
                                }}
                            >
                                Send Invitation
                                </button>:
                            <button
                                type="button"
                                className="log-button"
                                    onClick={() => {
                                    setResponse(true)
                                    sendInvitation(access.id)
                                }}
                            >
                                Send Invitation
                                </button>}
                    </div>
                    )
                    }) : "Loading..."
                        }  
            
                  
            </div>  
        </div>
    )
            
}
