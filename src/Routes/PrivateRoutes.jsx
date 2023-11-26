import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const {auth} = useSelector((store)=>store.AuthReducer)
  
  return auth ? children : <Navigate to="/login" />
}

export default PrivateRoutes