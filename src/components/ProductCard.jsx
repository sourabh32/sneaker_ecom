import React from 'react';
import { Box, Image, Text, Button, position } from '@chakra-ui/react';
import { addItemToCart } from '../store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import {BiCartAdd} from "react-icons/bi"

const ProductCard = ({product}) => {
    const {brand,price,image} = product
    const dispatch = useDispatch()
  return (
    <Box
    fontFamily={"poppins"}
    pos={"relative"}
     
    
      overflow="hidden"
      boxShadow="md"
       >
      <Image objectFit="cover" src={image} alt="Product" />

      
      <Box p={4}>
       
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          {brand}
        </Text>

       
        <Text fontSize="lg" fontWeight={"semibold"} color="gray.500" >
          ${price}
        </Text>

        <BiCartAdd style={{position:"absolute",right:"4%", top:"4%",cursor:"pointer"}} onClick={()=>dispatch(addItemToCart({...product}))} size={"25"} />
        {/* <Button top={0} left={0} pos={"absolute"}  colorScheme="gray"  size="sm"> */}
        {/* <BiCartAdd />
        </Button> */}
      </Box>
    </Box>
  );
};

export default ProductCard;