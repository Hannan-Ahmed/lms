
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
            // 'adminauthtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYzMzY4NzYyNDMxOGJjNzcxNDk5NTcxYiJ9LCJpYXQiOjE2NjQ1MTc5ODd9.iFX1qNl3VfJoYjpW0HO5BVOB9LyROUn_Ux6NJuP1wm8'
            'adminauthtoken':localStorage.getItem('admintoken')
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





















