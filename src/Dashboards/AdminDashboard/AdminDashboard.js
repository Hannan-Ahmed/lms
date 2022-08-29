import React from 'react'
import './AdminDashboard.css'
function AdminDashboard() {
  return (
    <div>

      <div className='head'>

        {/* ********************************************- MENU BAR DIV - ************************************************** */}
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
                  <li>Courses</li>
                  <li>Trainers</li>
                  <li>Trainees</li>
                  <li>Requests</li>
                  <li>settings</li>
                </ul>

              </span>
            </div>


          </section>

        </div>

        {/* ********************************************- Admin dashboard BAR DIV - ************************************************** */}

        <div className='content'>

          <div className='tops'>
            <span className='title' >Admin Dashboard</span>
            <span className='image'><img src="https://tse3.mm.bing.net/th?id=OIP.nguLi5n5GJQ07qlkQCmsAQHaHa&pid=Api&P=0" /></span>
          </div>

          {/* ********************************************- Grid DIV - ************************************************** */}


          <div className="container grids" id='gridi'>

            <div className="row">

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>



              </div>

              <div className="col">
                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>
              </div>


              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>

            </div>




            <div className="row">
            <div className="col">
                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>
              </div>
              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>



              </div>

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>

            </div>








            <div className="row">
            <div className="col">
                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>
              </div>
              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>



              </div>

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>

            </div>





            <div className="row">

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>



              </div>

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>

              <div className="col">

                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>

              </div>
              <div className="col">
                <div className="card" >
                  <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mohammad Ali</h5>
                    <p className="card-text">Assistent Professor</p>
                    <a href="#" className="btn btn-primary">View Profile</a>
                  </div>
                </div>
              </div>
            </div>




          </div>


        </div>












      </div>



    </div>
  )
}

export default AdminDashboard
