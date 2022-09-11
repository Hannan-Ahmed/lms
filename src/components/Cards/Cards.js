import React from 'react'
import './Cards.css'
function Cards(props) {
    const {notes}=props
  return (
    <div>
      <div className="card"  >
        <img src="https://tse3.mm.bing.net/th?id=OIP.9wGX5ctrMCmEjI3PMs_pBwHaEK&pid=Api&P=0" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{notes.course_name}</h5>
          <p className="card-text"> Instructor </p>
        </div>
      </div>
    </div>
  )
}

export default Cards
