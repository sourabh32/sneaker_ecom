import React from "react";
import { Box, Flex, Image, Text,  IconButton, } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItemToCart, decreItemFromCart, removeItemFromCart } from "../../store/slices/cartSlice";
import { toast } from "react-hot-toast";
import {motion} from "framer-motion"
const AnimatedFlex = motion(Flex);
const CartProduct = ({ item }) => {
  const { image, brand, price, quantity,id,description } = item;
  const dispatch = useDispatch()

  return (
    <AnimatedFlex initial={{ y:100,opacity: 0 }}
    whileInView={{y:0 ,opacity: 1 }} align="center" justify="space-between" p={2} borderBottom="1px solid #E2E8F0">
      <Box display="flex" alignItems="center">
        <Image src={image} boxSize="80px" objectFit="cover" alt={brand} mr={4} />
        
        <Box>
        <Text fontWeight="bold">{brand}</Text>
        <Text fontSize="0.5rem" fontWeight={"semibold"}>{description}</Text>
          
          <Text color="gray.500" fontSize="sm">
             ${price.toFixed(2)}
          </Text>
         
        </Box>
      </Box>
      <Box   display="flex" alignItems="center">
        <IconButton
          aria-label="Increase Quantity"
          icon={<AiOutlinePlus />}
          size="sm"
          variant="outline"
          onClick={() => dispatch(addItemToCart(item))}
        />
         <Text textAlign={"center"} w={["5","20"]}  fontWeight={"semibold"} color="gray.500" fontSize="sm">
             {quantity}
          </Text>
        <IconButton
          aria-label="Decrease Quantity"
          icon={<AiOutlineMinus />}
          size="sm"
          variant="outline"
          onClick={() => dispatch(decreItemFromCart(id))}
          
          disabled={quantity <= 1}
        />
        <IconButton
          aria-label="Remove Item"
          icon={<AiOutlineClose />}
          size="sm"
          variant="outline"
          onClick={() =>{dispatch(removeItemFromCart(id))
            toast.success('item removed')
          }}
          ml={2}
        />
      </Box>
    </AnimatedFlex>
  );
};

export default CartProduct;
