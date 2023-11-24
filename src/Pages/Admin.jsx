import React from 'react'
import AddProduct from '../Component/AddProduct'
import { Box } from '@chakra-ui/react'

const Admin = () => {
  return (
    <div>
        <Box mt={30} >
            <AddProduct/>
        </Box>
        
    </div>
  )
}

export default Admin