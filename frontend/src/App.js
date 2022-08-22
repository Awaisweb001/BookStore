import React from 'react'
import "./App.css"
import Signup from './Components/Signup'
import { Route, Routes } from "react-router-dom"
import Login from './Components/Login'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import CreateBook from './Components/CreateBook'
const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Dashboard/CreateBook' element={<CreateBook/>}/>
      </Routes>
    </>
  )
}

export default App