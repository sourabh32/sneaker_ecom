import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/react';
import ProductCard from "../ProductCard/ProductCard"
import { useSelector } from 'react-redux';

import MyLink from "../Additionals/MyLink"
import Loader from "../Additionals/Loader"

const DisplaySneakers = () => {
    const products = useSelector((state)=> state.productReducer.products)

  return (
    <>
    <Heading my={5} textAlign={"center"} fontFamily={"bebas neue"}>SNEAKERS</Heading>
    <MyLink title={"view all"} path={"/sneakers/all"} />
    {
      products.length >0 ? (<Grid
        my={10}
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} 
        gap={4} 
        px={[5,10]}
      >
          
          {
        products.length>0 &&
     
       products.slice(60,76).map((product) => <ProductCard product={product} key={product.id} />)
       }
       
      </Grid>):(
        <Box w="100%" h="90vh">
      <Loader />
      </Box>
     )
    }

  
    
    </>
  );
};

export default DisplaySneakers;
