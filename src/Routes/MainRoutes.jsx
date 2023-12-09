import React from 'react'
import {Route, Router, Routes} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/SignUp'
import Admin from '../Pages/Admin'
import Product from '../Pages/Product'
import PrivateRoutes from './PrivateRoutes'
import SingleProduct from '../Component/SingleProduct'
import Cart from '../Pages/Cart'
import CheckOut from '../Pages/CheckOut'
const MainRoutes = () => {
  return (
   
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/cart' element={<PrivateRoutes><Cart/></PrivateRoutes> }/>
   
   <Route path='/admin' element={ <PrivateRoutes> <Admin/>  </PrivateRoutes>}/>
   <Route path='/payment' element={ <PrivateRoutes> <CheckOut/>  </PrivateRoutes>}/>
  
   <Route path='/product' element={<Product/>}/>
   <Route  path='/product/:id' element={<SingleProduct/>}/>
   
  </Routes>
  
  )
}

export default MainRoutes