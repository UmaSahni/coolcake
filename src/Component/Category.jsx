import React from 'react';
import { Box, Image, SimpleGrid, Text } from '@chakra-ui/react';

const Category = () => {
  const cakes = [
    {
      src: 'https://media.istockphoto.com/id/1150799293/photo/decadent-chocolate-cake-with-chocolate-ganache.jpg?s=612x612&w=0&k=20&c=up0_vRATjEBcBKEx2V9j7aMblCeUZUzUlAu4TwrJ8H8=',
      text: 'Chocolate Cake',
    },
    {
      src: 'https://media.istockphoto.com/id/1224756375/photo/tender-pink-cake-decorated-with-melted-white-chocolate-macaroons-meringues-cake-pops-and.jpg?s=612x612&w=0&k=20&c=UyeFyq3LzkhbR0HRUEsdwn0eljq9dar3qv-DeOD7Xnw=',
      text: 'Cream Cake',
    },
    {
      src: 'https://media.istockphoto.com/id/1187830896/photo/professional-cake-decoration-close-up-copy-space.jpg?s=612x612&w=0&k=20&c=UnXRpJjeh8rLY6GwD_NqoGbJZ4z7u9yPxTazCa3GhP0=',
      text: 'Special Cake',
    },
  ];

  return (
    <SimpleGrid  columns={[1, 2, 3]} m={2}  spacing={10}>
      {cakes.map((cake, index) => (
        <Box key={index} position="relative">
          <Image src={cake.src} alt={cake.text} />
          <Text
            position="absolute"
            bottom={4}
            left={0}
            right={0}
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize={"larger"}
          >
            {cake.text}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Category;

