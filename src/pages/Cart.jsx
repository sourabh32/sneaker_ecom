
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const CartPage = () => {
    const cartItems = useSelector(state=> state.cartReducer.cartItems)
//   const cartItems = [
//     { id: 1, name: "Product 1", price: 19.99, quantity: 2 },
//     { id: 2, name: "Product 2", price: 24.99, quantity: 1 },
//   ];

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Shopping Cart
      </Text>
      {cartItems.map((item) => (
       <CartProduct key={item.id} item = {item} />
      ))}
      {cartItems.length > 0 ? (
        <Box textAlign="right">
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Total: ${calculateTotalPrice()}
          </Text>
          <Button colorScheme="teal" size="lg">
            Checkout
          </Button>
        </Box>
      ) : (
        <Text fontSize="lg">Your cart is empty.</Text>
      )}
    </Box>
  );
};

export default CartPage;
