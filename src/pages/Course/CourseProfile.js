import React from 'react'
import Header from '../../components/Header/Header'
import SideBar from '../../components/Sidebar/SideBar'
import './CourseProfile.css'
function CourseProfile() {
  return (
    <div>

      <div className='head'>

        {/* ********************************************- MENU BAR DIV - ************************************************** */}
        {/* Verticle Menu Bar  */}
        <SideBar />

        {/* ********************************************- CourseProfile BAR DIV - ************************************************** */}

        <div className='content'>
          <Header />
        </div>


        {/* ********************************************- Content Starts - ************************************************** */}

        <div className='contents'>
          <span>
            <img className='imgi' src="https://tse3.mm.bing.net/th?id=OIP.w_5XXuN68wNeFqyfRWSOEQHaEK&pid=Api&P=0" alt="" />
          </span>

          <div className='info'>

            <span>
              COURSE NAME
            </span>

            <span>
              DESCRIPTION
            </span>



            
          </div>


        </div>




      </div>

    </div>
  )
}

export default CourseProfile
