import React from 'react'
import './AdminDashboard.css'
function AdminDashboard() {
  return (
    <div>

      <div>

{/* ********************************************- MENU BAR DIV - ************************************************** */}
                                      {/* Verticle Menu Bar  */}
        <div className="menubar">
          <section>

            {/*          LMS Heading in menu bar              */}

            <span id='heading'>
              LMS
            </span>
 
            {/*          LMS Content in menu bar              */}
             <span className='items'>
   
               <ul className='tags' id='tagi'>
                <li>Courses</li>
                <li>Trainers</li>
                <li>Trainees</li>
                <li>Requests</li>
                <li>settings</li>
              </ul>

            </span>

          </section>

        </div>
      {/* ********************************************- Admin dashboard BAR DIV - ************************************************** */}









      </div>



    </div>
  )
}

export default AdminDashboard
