
import React,{useState} from 'react'
import cardContext from './cardContext'
import { useNavigate } from "react-router-dom";

export default function CardState(props) {
    const [notes, setnotes] = useState([])

    const getnotes = async () => {

        const response = await fetch("http://localhost:5000/course/fetch", {
          method: 'GET',
    
          headers: {
            'Content-Type': 'application/json',
            // 'trainerauthtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0cmFpbmVyIjp7ImlkIjoiNjMzOTQyZDg3ZTYxMzNmMzQ2M2YzZjM0In0sImlhdCI6MTY2NDY5NzA0OH0.u9NkyYNtjYY9yV7FaI_1MVyYD5bJV2ypHFGsawR58Qc'
            
            
            // 'adminauthtoken':'YzZjM0In0sImlhdCI6MTY2NDY5NzA0OH0.u9NkyYNtjYY9yV7FaI_1MVyYD5bJV2ypHFGsawR58Qc'

            
            "trainerauthtoken":localStorage.getItem('trainertoken')
          },
        });
    
        const json = await response.json();
        console.log(json)
        setnotes(json)
    
      }

  return (
    <cardContext.Provider value={{notes,getnotes}}>
            {props.children}

        </cardContext.Provider>
  )
}





















