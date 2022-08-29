import React from 'react'
import Cards from '../../components/Cards/Cards'
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

          <div className='tops'>
            <div className='title' >Admin Dashboard</div>
            <div className='image' ><img src="https://tse3.mm.bing.net/th?id=OIP.nguLi5n5GJQ07qlkQCmsAQHaHa&pid=Api&P=0" /></div>
          </div>




          {/* ********************************************- Grid DIV - ************************************************** */}


          <div className="container grids" id='gridi'>
       

            <div className="row">

              <div className="col ">
                <Cards/>
              </div>

              <div className="col ">
                <Cards/>
              </div>


              <div className="col ">
                <Cards/>
              </div>

            </div>
            <div className="row">

<div className="col ">
  <Cards/>
</div>

<div className="col ">
  <Cards/>
</div>


<div className="col ">
  <Cards/>
</div>

</div>
<div className="row">

              <div className="col ">
                <Cards/>
              </div>

              <div className="col ">
                <Cards/>
              </div>


              <div className="col ">
                <Cards/>
              </div>

            </div>



           


          </div>


        </div>












      </div>



    </div>
  )
}

export default AdminDashboard