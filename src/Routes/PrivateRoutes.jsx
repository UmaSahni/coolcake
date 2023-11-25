import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const {auth} = useSelector((store)=>store.AuthReducer)
  console.log(auth)
  console.log("Hi hello")
  return auth ? children : <Navigate to="/login" />
}

export default PrivateRoutes