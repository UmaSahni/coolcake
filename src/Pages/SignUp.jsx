'use client'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,

} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { SIGNUP_API } from '../apiEndPoints'
import {Link} from "react-router-dom"
// https://coolcakebackend.onrender.com/user ---> API Endpoint

// Initial State
const initialState = {
    "name":"",
    "lastname":"",
    "password":"",
    "email":""
}

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false)
  const [state, setState] = useState(initialState)

  const handleChange = (e) =>{
    e.preventDefault()
    const {name, value} = e.target
    setState( pre => ({ ...pre, [name]: value}))
    
    // setState(initialState)
  }

 

  const handleSubmit = async () => {
     // Display loading notification
    const loadingToastId = toast.loading('Signing up...');

  try {
   
    // Make Axios request
    const response = await axios.post(SIGNUP_API, state);

    // Close the loading notification
    toast.dismiss(loadingToastId);

    // Display success notification
    toast.success(<b>Signup successful!</b>);
    
    // Do something with the response if needed
    console.log(response);
  } catch (error) {
    // Close the loading notification
    toast.dismiss(loadingToastId);

    // Display error notification
    toast.error(<b>Signup failed. Please try again.</b>);
    
    // Log the error for debugging
    console.error('Signup error:', error);
  }
  setState(initialState)
};

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
        <Toaster/>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input name="name" state={state.name} onChange={handleChange} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input name="lastname"  state={state.lastname} onChange={handleChange} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input name="email" state={state.email} onChange={handleChange} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input name="password"  state={state.password} onChange={handleChange} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSubmit}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to = {"/login"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}