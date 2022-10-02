import React, { useState, useEffect, useContext } from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import SideBar from '../../components/Sidebar/SideBar'
import { useNavigate } from "react-router-dom";

import './TrainerDashboard.css'
import cardContext from '../../components/context/cards/cardContext';


function TrainerDashboard() {

  const context = useContext(cardContext)
  const { notes, getnotes } = context;

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('trainertoken')) {
      getnotes();
    }
    else {

      navigate('/')
    }
  }, [])
  const ha=()=>{
    console.log("matched")
      }
  
  const sidedata = [<div key="1" onClick={ha}>A</div>, 'Students', 'Assignments', 'Quizes', 'Settings']
  return (
    <div>

      <div className='head'>

        {/* ********************************************- MENU BAR DIV - ************************************************** */}

        {/* Verticle Menu Bar  */}

        <SideBar sidedata={sidedata} />

        {/* ********************************************- Admin dashboard BAR DIV - ************************************************** */}

        <div className='content'>

          <Header head={"Trainer Dashboard"} />

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

export default TrainerDashboard
