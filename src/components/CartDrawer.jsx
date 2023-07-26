import React, { useState } from 'react';
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton } from '@chakra-ui/react';
import {AiOutlineClose} from "react-icons/ai"

import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../store/slices/cartSlice';

const CartDrawer = ({onClose,isOpen}) => {
  
  const cartItems = useSelector(state=> state.cartReducer.cartItems)
  
  const dispatch = useDispatch()


  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
 

  return (
    <Drawer placement="right" onClose={() =>onClose() } isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
{cartItems.length === 0 ? (
  <Box>Your cart is empty</Box>
) : (
  <Box>
    {cartItems.map(item => (
      <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" mb={4}>
        <img src={item.image} alt={item.brand} width="75" height="75" style={{ borderRadius: '4px' }} />
        <Box flex="1" ml={4}>
          <Box fontSize="lg" fontWeight="bold">{item.brand}</Box>
          <Box>{item.description}</Box>
          <Box fontWeight="bold">${item.price}</Box>
        </Box>
        <AiOutlineClose
          color='red'
          onClick={() => dispatch(removeItemFromCart((item.id)))}
        />
      </Box>
    ))}
    <Box fontWeight="bold" mt={4}>Total: ${getTotalPrice()}</Box>
  </Box>
)}
</DrawerBody>
          
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CartDrawer;



