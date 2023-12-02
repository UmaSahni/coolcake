import React from 'react';
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
} from '@chakra-ui/react';
import { AiOutlineDelete } from 'react-icons/ai';

const CartPage = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Your Shopping Cart</Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {/* Cart items */}
        <Box boxShadow="base" p={4} borderRadius="md">
          <Flex>
            <Box flex="1">
              <Text fontSize="lg">Product Name</Text>
              <Text color="gray.500">Category: Electronics</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                $99.99
              </Text>
            </Box>
          </Flex>
          <Flex mt={2} align="center">
            <IconButton icon={<AiOutlineDelete />} colorScheme="red" variant="ghost" />
            <Spacer />
            <Text>Quantity: 2</Text>
          </Flex>
        </Box>

        {/* Another Cart item */}
        <Box boxShadow="base" p={4} borderRadius="md">
          <Flex>
            <Box flex="1">
              <Text fontSize="lg">Another Product</Text>
              <Text color="gray.500">Category: Fashion</Text>
            </Box>
            <Spacer />
            <Box>
              <Text fontWeight="bold" fontSize="lg">
                $49.99
              </Text>
            </Box>
          </Flex>
          <Flex mt={2} align="center">
            <IconButton icon={<AiOutlineDelete />} colorScheme="red" variant="ghost" />
            <Spacer />
            <Text>Quantity: 1</Text>
          </Flex>
        </Box>
      </SimpleGrid>

      <Divider my={4} />

      {/* Cart Summary */}
      <Flex justifyContent="flex-end">
        <Box>
          <Text fontSize="lg">Total: $149.98</Text>
          <Button mt={4} colorScheme="teal">
            Checkout
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CartPage;
