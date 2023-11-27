import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
  const {auth} = useSelector((store)=>store.AuthReducer)
  const location = useLocation()
  console.log(location)
  return auth ? children : <Navigate to="/login" state={location.pathname} replace={true} />
}

export default PrivateRoutes