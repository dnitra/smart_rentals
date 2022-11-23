
import axios from 'axios';
import React,{useState, useEffect} from 'react';
export default function PublicListings() {
const [properties, setProperties] = useState([]);

    useEffect(()=>{
    // getProperties()
    },[])
    const getProperties = async() => {
            try{
                const response = axios.get('/publicListings/show')
                console.log(response.data);
                setProperties(response.data);
            }
            catch(error){
                console.log(error)
            }
    }
  return (
    <div>PublicListings</div>
  )
}

