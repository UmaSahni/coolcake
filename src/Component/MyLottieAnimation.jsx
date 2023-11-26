import { Box, Flex, Image, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const MyLottieAnimation = () => {
  return (
    <div>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
        ></Box>
        <Image borderRadius={10} width={240} height={350} src="loading.gif" />
      </Flex>
    </div>
  );
};

export default MyLottieAnimation;
