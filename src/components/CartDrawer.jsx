import React, { useContext, useState } from 'react';
import { Box, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, IconButton, DrawerFooter, Button, VStack,Text } from '@chakra-ui/react';
import {AiOutlineClose} from "react-icons/ai"

import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../store/slices/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { userContext } from '../context/UserContext';

const CartDrawer = ({onClose,isOpen}) => {
  
  const cartItems = useSelector(state=> state.cartReducer.cartItems)
  const user = useContext(userContext)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleCheckout = () =>{
    onClose()
    if(user){
      navigate("/cart")
    }
    else{
      toast.error("login to checkout")
      navigate("/authenticate")
    }
  }

console.log(cartItems)
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
 

  return (
    <Drawer placement="right" onClose={() =>onClose() } isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent fontFamily={"poppins"}>
          <DrawerCloseButton />
          <DrawerHeader fontFamily={"bebas neue"}>CART</DrawerHeader>

          <DrawerBody fontFamily={"poppins"}>
{cartItems.length === 0 ? (
  <Box>Your cart is empty</Box>
) : (
  <Box>
    {cartItems.map(item => (
      <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" mb={4}>
        <img src={item.image} alt={item.brand} width="75" height="75" style={{ borderRadius: '4px' }} />
        <Box  ml={4}>
          <Text fontSize="lg" fontWeight="bold">{item.brand}</Text>
          <Text>{item.description}</Text>
          <Text fontWeight="bold">${item.price}</Text>
        </Box>
        <AiOutlineClose
       
          color='red'
          onClick={() => {dispatch(removeItemFromCart((item.id)))
            toast.success(`item removed`)
          }}
        />
      </Box>
    ))}
    
  </Box>
)}
</DrawerBody>
<DrawerFooter> 
  <VStack w="full"  >
  <Box alignSelf={"flex-start"} fontWeight="bold" mt={4}>Total: ${getTotalPrice()}</Box>
 
  <Button onClick={handleCheckout} w="90%" alignSelf={"center"} >Checkout</Button>
  
  </VStack>
 
    </DrawerFooter>
          
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default CartDrawer;



