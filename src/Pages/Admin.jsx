import React from 'react'
import AddProduct from '../Component/AddProduct'
import { Box, useMediaQuery, Text } from '@chakra-ui/react'
import Sidebar from "../Component/Sidebar"
const Admin = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  return (
    <div>
        <Box mt={30} >
            {/* <AddProduct/> */}
          {/* <Sidebar/> */}
        </Box>
        <Text>
      {isLargerThan1280 ? 'larger than 1280px' : 'smaller than 1280px'}
    </Text>
    </div>
  )
}

export default Admin