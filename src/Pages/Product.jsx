import React from 'react'
import ProductList from '../Component/ProductList'
import Sidebar from '../Component/Sidebar'
import { Box, Flex, Spacer } from '@chakra-ui/react'

const Product = () => {
  return (
    <div>
      <Flex margin={"auto"} justifyContent={"center"} > 

      <Box border={"1px solid red"} >
      <Sidebar/>
      </Box>
      {/* <Spacer/> */}
      <Box border={"1px solid green"} >
       <ProductList/>
      </Box>
     

      </Flex>
     
    </div>
  )
}

export default Product