import React from 'react'
import {Route, Router, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/SignUp'
import Admin from '../Pages/Admin'
const MainRoutes = () => {
  return (
   
  <Routes>
   <Route path='/home' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/admin' element={<Admin/>}/>
   
  </Routes>
  
  )
}

export default MainRoutes