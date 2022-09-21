import React ,{useState,useEffect}from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import SideBar from '../../components/Sidebar/SideBar'
import { useNavigate } from "react-router-dom";

import './AdminDashboard.css'
function AdminDashboard() {



  const [notes, setnotes] = useState([])
  const navigate = useNavigate();



  // useEffect(() => {

  //   if(localStorage.getItem('admintoken'))
  //   {
      
  //     navigate('/')
      
  //   }
  // }, [])
  
  //get All Notes
  const getnotes = async () => {

    const response = await fetch("http://localhost:5000/course/fetch", {
      method: 'GET',

      headers: {
        // 'Content-Type': 'application/json'
        // 'auth-tocken':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlZTk1YWQ1NmEwNDViYzVlYmMxZTZlIn0sImlhdCI6MTY1OTgwMzEwMH0.iw1BQgUzZRQPLv2XdgTP0stZDv1Krk7Mb7mOZJ4COHI'
      },
    });

    const json = await response.json();
    console.log(json)
    setnotes(json)

  }

  useEffect(() => {

    if(localStorage.getItem('admintoken'))
   {
      getnotes();
    }
    else
    {
      navigate('/')
    }


  }, [])


  return (
    <div>

      <div className='head'> 

        {/* ********************************************- MENU BAR DIV - ************************************************** */}

        {/* Verticle Menu Bar  */}

        <SideBar />

        {/* ********************************************- Admin dashboard BAR DIV - ************************************************** */}
 
        <div className='content'>

          <Header />

          {/* ********************************************- Grid DIV - ************************************************** */}

          <div className="container grids" id='gridi'>



            {notes.map((notes) => {
              return <Cards notes={notes} />
            })}





          </div>


        </div>












      </div>


    </div>
    
  )
}

export default AdminDashboard