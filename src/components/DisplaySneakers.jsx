import React from 'react';
import { Box, Button, Grid, Heading, LinkBox } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DisplaySneakers = () => {
    const products = useSelector((state)=> state.productReducer.products)
    console.log("dis",products)
  return (
    <>
    <Heading my={5} textAlign={"center"} fontFamily={"bebas neue"}>SNEAKERS</Heading>
    <Link textAlign="center"><LinkBox color={"red.400"} fontWeight={"semibold"} fontFamily={"poppins"} textDecoration={"underline"} textAlign={"center"}>View All</LinkBox></Link>
    <Grid
      my={10}
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} 
      gap={4} 
      px={[5,10]}
    >
        
        {
      products.length>0 &&
   
     products.slice(60,76).map((product) => <ProductCard product={product} key={product.id} />)
     }
     
    </Grid>
    </>
  );
};

export default DisplaySneakers;
