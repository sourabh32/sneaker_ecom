import React, { useEffect, useState } from "react";



import {  useDispatch, useSelector } from "react-redux";

import Filter from "./Filter";

import ProductCard from "./components/ProductCard";
import { Box, Grid } from "@chakra-ui/react";
import Loader from "./Loader";


function SneakerGallery() {
  const display = useSelector((state) => state.displayReducer.displayProducts);
  const products = useSelector((state)=> state.productReducer.products)

 
  
if(display.length == 0){
  return <Box w="100%" display="grid" placeContent={"center"} h="90vh"><Loader /></Box>
}
  return (
    <>
      <Filter />
      <Grid
      my={10}
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} 
      gap={4} 
      px={[5,10]}
    >
        {display.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </Grid>
    </>
  );
}

export default SneakerGallery;
