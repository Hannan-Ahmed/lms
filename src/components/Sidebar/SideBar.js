import React from 'react'
import './SideBar.css'


function SideBar(props) {
  
  const arr=props.sidedata;

  return (
    <div>
      {/* Verticle Menu Bar  */}
      <div className="menubar">

<section >

  {/*          LMS Heading in menu bar              */}

  <span id='heading'>
    LMS
  </span>


  <input type="checkbox" id="nav-check" />


  <div className="nav-btn">
    <label htmlFor="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>


  <div className="nav-links">
    <span className='items'>

      {/*          LMS Content in menu bar              */}

      <ul className='tags' id='tagi'>
        {/* <li>Courses</li>
        <li>{props.dat.join(' ')}</li>
        <li>Trainees</li>
        <li>Requests</li>
        <li>settings</li> */}
        

        {

          arr.map((e)=>(
            <li>{e}</li>
          ))

        }





      </ul>

    </span>
  </div>


</section>

</div>
    </div>
  )
}

export default SideBar
