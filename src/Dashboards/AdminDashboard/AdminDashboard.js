import React, { useState, useEffect, useContext } from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import SideBar from '../../components/Sidebar/SideBar'
import { useNavigate } from "react-router-dom";

import './AdminDashboard.css'
import cardContext from '../../components/context/cards/cardContext';
function AdminDashboard() {


  const context = useContext(cardContext)
  const { notes, getnotes } = context;


  const navigate = useNavigate();





  useEffect(() => {

    if (localStorage.getItem('admintoken')) {
      getnotes();
    }
    else {
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
              return <Cards notes={notes} head={"Admin Dashboard"} />
            })}





          </div>


        </div>












      </div>


    </div>

  )
}

export default AdminDashboard