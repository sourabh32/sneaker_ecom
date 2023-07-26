import React from 'react';
import { Grid, Box, Image, Text, Link } from '@chakra-ui/react';
import men from "../assets/men.jpg"
import women from "../assets/women.jpg"
import kids from "../assets/kids.jpg"

const ShopCategory = () => {
  const categories = [
    {
      id: 1,
      image: men,
      name: 'MEN',
      link: '#category1',
    },
    {
      id: 2,
      image: women,
      name: 'WOMEN',
      link: '#category2',
    },
    {
      id: 3,
      image: kids,
      name: 'KIDS',
      link: '#category3',
    },
    // Add more categories here
  ];

  return (
    <Grid
    fontFamily={"poppins"}
   my={10}
      px={[5,10]}
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} 
      gap={4} 
    >
      {categories.map((category) => (
        <Box key={category.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          
          <Image objectFit={"cover"} h="50vh" w="full" src={category.image} alt={category.name} />

        
          <Text textAlign={"center"} fontWeight="bold" fontSize="lg" mt={2}>
            {category.name}
          </Text>

         
          <Link textAlign={"center"} color="teal.500" href={category.link} mt={2} display="block">
            View Category
          </Link>
        </Box>
      ))}
    </Grid>
  );
};

export default ShopCategory;
