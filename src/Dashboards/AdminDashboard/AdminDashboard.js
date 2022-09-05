import React from 'react'
import Cards from '../../components/Cards/Cards'
import Header from '../../components/Header/Header'
import SideBar from '../../components/Sidebar/SideBar'
import './AdminDashboard.css'
function AdminDashboard() {
  return (
    <div>

      <div className='head'>

        {/* ********************************************- MENU BAR DIV - ************************************************** */}

        {/* Verticle Menu Bar  */}

        <SideBar/>

        {/* ********************************************- Admin dashboard BAR DIV - ************************************************** */}

        <div className='content'>

          <Header />

          {/* ********************************************- Grid DIV - ************************************************** */}

          <div className="container grids" id='gridi'>

            <div className="row">

              <div className="col ">
                <Cards />
              </div>

              <div className="col ">
                <Cards />
              </div>

              <div className="col ">
                <Cards />
              </div>

            </div>
           
            <div className="row">

              <div className="col ">
                <Cards />
              </div>

              <div className="col ">
                <Cards />
              </div>


              <div className="col ">
                <Cards />
              </div>

            </div>
            
            <div className="row">

              <div className="col ">
                <Cards />
              </div>

              <div className="col ">
                <Cards />
              </div>


              <div className="col ">
                <Cards />
              </div>

            </div>






          </div>


        </div>












      </div>



    </div>
  )
}

export default AdminDashboard