import React from 'react'
import "./Dashboard.css"
import DashNav from './DashNav'

const Dashboard = () => {
  return (
    <>
          <div className='container-fluid DashContainer p-0'>
                    <DashNav/>
                    <div className='DataDash'>
                    <div className='searchbar'></div>
                    </div>
          </div>
    </>
  )
}

export default Dashboard