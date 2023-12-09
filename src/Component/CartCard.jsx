import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Image,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  getCart,
  updateQuantity,
} from "../Redux/CartReducer/action";
import { Toaster } from "react-hot-toast";

const CartCard = ({ category, image, name, price, id, quantity }) => {
  const INR_PRICE = price && price.mrp_inr;
  // react-redux hooks
  const dispatch = useDispatch();
  const { cart, cartItem } = useSelector((store) => store.CartReducer);
  const { AuthReducer } = useSelector((store) => store);

  const userData = AuthReducer["data"];
  const userId = userData["id"]; // Current user Id

  // Delete Item from Cart
  const delteItem = (id) => {
    dispatch(deleteCartItem(id)).then(() => {
      // Dispatch getCart after successful deletion
      dispatch(getCart(userId));
    });
  };

  // update quantity
  const handleChange = (value) => {
    const obj = { category, image, name, price, id, quantity: +value };
    dispatch(updateQuantity(obj))
      .then((res) => {
        dispatch(getCart(userId));
      })
      .catch((err) => {
        console.log("Error in handleChange function in CartCard.jsx", err);
      });
  };

  return (
    <>
      <Toaster />
      <Box
        boxShadow="base"
        p={4}
        borderRadius="md"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "stretch" }}
      >
        <Image
          ml={{ base: 0, md: 6 }}
          mr={{ base: 0, md: 6 }}
          mb={{ base: 4, md: 0 }}
          width={{ base: "40%", md: 100 }}
          height={{ base: "auto", md: 100 }}
          src={`https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/${image}`}
          alt={`${name} image`}
        />
        <Flex flex="1" flexDirection="column">
          <Text fontSize="lg" mb={2}>
            Product Name: {name}
          </Text>

          <Flex direction={{ mobile: "column" }}>
            <Text color="gray.500" mb={2}>
              Category: {category}
            </Text>
            <Flex flex="1" justify="flex-end">
              <Text>Quantity : </Text>
              <NumberInput
                ml={{ base: 3, md: 3 }}
                border={"#B83280"}
                borderRadius={"10"}
                size="sm"
                maxW={20}
                defaultValue={quantity}
                min={1}
                onChange={handleChange}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>

          <Flex
            mt={{ base: 2, md: 0 }}
            align={{ base: "center", md: "stretch" }}
          >
            <Button
              onClick={() => delteItem(id)}
              size={"sm"}
              variant="outline"
              leftIcon={<AiOutlineDelete />}
              colorScheme="pink"
            >
              Remove
            </Button>

            <Flex flex="1" justify="flex-end">
              <Text fontWeight="bold" fontSize="lg">
                ₹ {INR_PRICE}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default CartCard;
