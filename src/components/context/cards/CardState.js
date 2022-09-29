
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
            'adminauthtoken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6eyJpZCI6IjYzMzU5ZmIyMzQzNzNmNTA4OTc5MmY0MCJ9LCJpYXQiOjE2NjQ0NTg2NzR9.P0r_FG3-NOE8x6-pN2INOViIi6z6qa6JvARGzm659d8'
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





















