import React from 'react'
import "./Navbar.css"
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
          <div className='navbar nav'>
               <div className='UserDiv'>
                    <div className='UserName'>
                          <FaUserAlt style={{marginTop:"-5px"}} />&nbsp;<span>User</span>
                    </div>
                    <div className='UserLog'>
                              Logout
                    </div>
               </div>
               <div className='PublishReader'>
                    <div className='Publish'>
                              Publish
                    </div>
                    <div className='Reader'>
                              Reader
                    </div>
               </div>
          </div>
    </>
  )
}

export default Navbar