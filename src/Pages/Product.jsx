import React from 'react'
import ProductList from '../Component/ProductList'
import Sidebar from '../Component/Sidebar'
import { Box, Flex, Spacer } from '@chakra-ui/react'

const Product = () => {
  return (
    <div>
      <Flex margin={"auto"} justifyContent={"center"} > 

      <Box borderRight={"1px solid #7f5539"}  >
      <Sidebar/>
      </Box>
      {/* <Spacer/> */}
      <Box >
       <ProductList/>
      </Box>
     

      </Flex>
     
    </div>
  )
}

export default Product