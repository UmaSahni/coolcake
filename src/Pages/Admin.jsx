import React from 'react'
import AddProduct from '../Component/AddProduct'
import { Box } from '@chakra-ui/react'
import Sidebar from "../Component/Sidebar"
const Admin = () => {
  return (
    <div>
        <Box mt={30} >
            {/* <AddProduct/> */}
          <Sidebar/>
        </Box>
        
    </div>
  )
}

export default Admin