import {
  Box,
  chakra,
  Container,
  Stack,

  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Badge,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProduct } from '../Redux/ProductReducer/action';
import {
  Text,
} from '@chakra-ui/react';

const SingleProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  let id = location.pathname.split("/")[2];  // "/product/601446" --> Taking out only id


  const { ProductReducer } = useSelector((store) => store);

  console.log(ProductReducer);
  console.log(id, "This is id");

  const obj = {
    params: {
      id,
    },
  };

  const data = ProductReducer && ProductReducer.products || [];

  // Check if data exists before destructuring its properties
  const {
    category,
    image,
    name,
    eggless,
    quantity,
    rating,
    sdesc,
    tagBeforeCutoff,
    price,
  } = data[0] || {};

  const INR_PRICE = price && price.mrp_inr;  // Check if price exists before accessing its property

   // Assign the colors to variables outside of the return statement
  const textColor = useColorModeValue('gray.900', 'gray.400');
  const bgColor = useColorModeValue('gray.900', 'gray.50');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const yellowColor = useColorModeValue('yellow.500', 'yellow.300');

  useEffect(() => {
    dispatch(getProduct(obj));
  }, []);

  // Render the component based on whether data is available or not
  if (!data.length) {
    return <Text>Loading...</Text>;
  }

   return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              `https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/${image}`
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />

        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {name}
            </Heading>


            <Badge  m={4} fontSize= "medium" variant='subtle' colorScheme='green'>
                    {tagBeforeCutoff}
           </Badge>


            <Text
              color={textColor}
              fontWeight={300}
              fontSize={'2xl'}>
               ₹{INR_PRICE}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={borderColor} />
            }>
            <VStack spacing={{ base: 2, sm: 6 }}>
              <Text
                color={textColor}
                fontSize={"xl"}
                fontWeight={'300'}>
                {sdesc}
              </Text>
             
            </VStack>

            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={yellowColor}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Category:
                  </Text>{' '}
                 {category}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Egg:
                  </Text>{' '}
                  {eggless? "Yes" : "No"}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Current Available Stock:
                  </Text>{' '}
                 {quantity}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                  </Text>{' '}
                  {rating}
                </ListItem>
                
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={2}
            size={'lg'}
            py={'7'}
            bg={bgColor}
            color={borderColor}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>

         
        </Stack>
      </SimpleGrid>
    </Container>
  )
};

export default SingleProduct;
