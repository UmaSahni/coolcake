// Navbar.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Spacer,
  Heading,
  Button,
  IconButton,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useMediaQuery } from '@chakra-ui/react'
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box bg="#7f5539" p={4}>
      <Flex alignItems="center">
        <Link to="/" >
        <Heading color="white" size="md">
          Cool Cake
        </Heading>
        </Link>
        <Spacer />
        {isLargerThan768 ? (
          <Box>
            <NavLink  to="/" style={{ marginRight: '1rem', color: 'white' }} activeStyle={{ color: 'red' }} >
              Home
            </NavLink>

            <NavLink  to="/admin" style={{ marginRight: '1rem', color: 'white' }} >
              Admin
            </NavLink>

              <NavLink  to="/product" style={{ marginRight: '1rem', color: 'white' }} >
              Product
            </NavLink>

             <NavLink  to="/cart" style={{ marginRight: '1rem', color: 'white' }} >
              Cart
            </NavLink>


            {/* Add more NavLink components for other pages */}
            <Button colorScheme="whiteAlpha" variant="outline">
             <Link to="/login" >Sign In </Link> 
            </Button>

            <Button colorScheme="whiteAlpha" variant="outline">
             <Link to="/signup" >Sign Up </Link> 
            </Button>
          </Box>
        ) : (
          <Flex>
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              variant="outline"
              colorScheme="whiteAlpha"
              onClick={onToggle}
              aria-label="Toggle Navigation"
              mr={2}
            />
          </Flex>
        )}
      </Flex>
      {!isLargerThan768 && (
        <Collapse in={isOpen}>
          <Box mt={4}>
            <NavLink to="/" style={{ display: 'block', color: 'white' }} >
              Home
            </NavLink>
            <NavLink to="/product" style={{ display: 'block', color: 'white' }} >
              Product
            </NavLink>
            {/* Add more NavLink components for other pages */}
            <Button mt={2} colorScheme="whiteAlpha" variant="outline">
              Sign In
            </Button>
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default Navbar;
