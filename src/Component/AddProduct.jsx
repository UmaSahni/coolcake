import { Box, Container, FormControl, FormLabel, Input, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const AddProduct = () => {
  return (
    <div>
        <Container maxW='container.sm' >
        <form>
            <Stack spacing={4}>
           
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input type="email" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Product Price</FormLabel>
              <Input type="password" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Product Price</FormLabel>
              <Input type="password" />
            </FormControl>
            
            </Stack>
        </form>
        </Container>
    </div>
  )
}

export default AddProduct