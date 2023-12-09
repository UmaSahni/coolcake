import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const EmptyCart = () => {
  return (
    <div>
      <Flex
        height={"calc(100vh - 280px)"}  // Adjusted height using calc
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}  // Added flexDirection to stack items vertically
      >
        <lottie-player
          src="https://lottie.host/b08c5f0d-a8ef-4b8f-a4d0-eea25cae3226/qhxQg4dE6m.json"
          background="##FFFFFF"
          speed="1"
          style={{ width: "300px", maxWidth: "300px" }}  // Made width responsive using calc
          loop
          autoplay
          direction="1"
          mode="normal"
        ></lottie-player>
        
        <Text
          textAlign={"center"}
          margin={"4"}
          fontSize={"larger"}
          fontWeight={"bold"}
        >
          Your Cart is Empty
        </Text>
      </Flex>
    </div>
  );
};

export default EmptyCart;
