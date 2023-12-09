import React from 'react'
import AddProduct from '../Component/AddProduct'
import { Box, useMediaQuery, Text } from '@chakra-ui/react'
import Sidebar from "../Component/Sidebar"
import LogoForWeb from '../Component/LogoForWeb'
import EmptyCart from '../Component/EmptyCart'

const Admin = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  return (
    <div>
   
<EmptyCart/>
   
    </div>
  )
}

export default Admin