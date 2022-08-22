import React from 'react'
import { Link } from 'react-router-dom'
import "./DashNav.css"

const DashNav = () => {
  return (
    <>
          <div className='DNav'>
                    <h3 className='AdminPanel'>Admin Panel</h3>
                    <ul className='DashNavUl'>
                              <Link to="/Dashboard"><li>Home</li></Link>
                              <Link to="/Dashboard/CreateBook"><li>Add Books</li></Link>
                              <li>Requests</li>
                              <li>Payments</li>
                              <li>Returns</li>
                              <li style={{color:"red"}}>Logout</li>
                    </ul>
          </div>
    </>
  )
}

export default DashNav