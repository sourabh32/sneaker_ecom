import React from "react";
import { Box, Flex, Image, Text, Button, IconButton } from "@chakra-ui/react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItemToCart, decreItemFromCart, removeItemFromCart } from "../store/slices/cartSlice";

const CartProduct = ({ item }) => {
  const { image, name, price, quantity,id } = item;
  const dispatch = useDispatch()

  return (
    <Flex align="center" justify="space-between" p={2} borderBottom="1px solid #E2E8F0">
      <Box display="flex" alignItems="center">
        <Image src={image} boxSize="80px" objectFit="cover" alt={name} mr={4} />
        <Box>
          <Text fontWeight="semibold">{name}</Text>
          <Text color="gray.500" fontSize="sm">
            Price: ${price.toFixed(2)}
          </Text>
          <Text color="gray.500" fontSize="sm">
            Quantity: {quantity}
          </Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton
          aria-label="Increase Quantity"
          icon={<AiOutlinePlus />}
          size="sm"
          variant="outline"
          onClick={() => dispatch(addItemToCart(item))}
        />
        <IconButton
          aria-label="Decrease Quantity"
          icon={<AiOutlineMinus />}
          size="sm"
          variant="outline"
          onClick={() => dispatch(decreItemFromCart(id))}
          ml={2}
          disabled={quantity <= 1}
        />
        <IconButton
          aria-label="Remove Item"
          icon={<AiOutlineClose />}
          size="sm"
          variant="outline"
          onClick={() =>dispatch(removeItemFromCart(id))}
          ml={2}
        />
      </Box>
    </Flex>
  );
};

export default CartProduct;
