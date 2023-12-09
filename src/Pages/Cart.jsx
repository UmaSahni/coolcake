import React, { useEffect, useReducer, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Spacer,
  IconButton,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../Redux/CartReducer/action";
import CartCard from "../Component/CartCard";

const CartPage = () => {
  

  // React-redux hooks
  const dispatch = useDispatch();
  const { CartReducer } = useSelector((store) => store);
  const { AuthReducer } = useSelector((store) => store);
  // Taking out the id
  const userData = AuthReducer["data"];
  const userId = userData["id"]; // Current user Id

  const cartItem = CartReducer.cart;

  useEffect(() => {
    dispatch(getCart(userId));
  }, []);
  console.log(CartReducer);
  return (
    <Box p={4}>
      <Heading mb={4}>Your Shopping Cart</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {/* Cart items */}
        {cartItem.length > 0 &&
          cartItem.map((el) => <CartCard {...el} key={el.id} /> )}

      </SimpleGrid>

      <Divider my={4} />

      {/* Cart Summary */}
      <Flex justifyContent="flex-end">
        <Box>
          <Text fontSize="lg">Total: $149.98</Text>
          <Button mt={4} colorScheme="pink">
            Checkout
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartPage;
