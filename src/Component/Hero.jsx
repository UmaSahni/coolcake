'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
             >
              Purchase Cakes
            </Text>
            <br />{' '}
            <Text color={'#7B3F00'} as={'span'}>
               of your choise
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#FF8FAB'}>
            Indulge in the joy of delectable treats by exploring a variety of cakes to satisfy your sweet cravings. 
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'#6F4E37'}
              color={'white'}
              _hover={{
                bg: '#814141',
              }}>
              Buy Now !
            </Button>
            
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          height={"80%"}
          mt={4}
          src={
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
          }
        />
      </Flex>
    </Stack>
  )
}