
import { Box, Text, VStack, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import {Link} from "react-router-dom"
import CartCheckout from "../components/CartCheckout";
const CartPage = () => {
    const cartItems = useSelector(state=> state.cartReducer.cartItems)


  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box fontFamily="poppins" p={4}>
      
      {cartItems.map((item) => (
       <CartProduct key={item.id} item = {item} />
      ))}
      {cartItems.length > 0 ? (
        <Box textAlign="right">
          <Text fontSize="lg" fontWeight="semibold" mb={2}>
            Total: ${calculateTotalPrice()}
          </Text>
          
        
          <CartCheckout cartTotal={calculateTotalPrice()} />
        
        </Box>
      ) : (<Box fontFamily={"poppins"} w="100%" h="90vh" placeContent={"center"} display={"grid"}>
        <Text fontWeight={"semibold"} textAlign={"center"} fontSize="lg"> Cart  empty</Text>
       <Link to="/sneakers/all"><Button colorScheme="gray" size="sm">
            Buy a pair!
          </Button>
          </Link>
          </Box>
      )}
    </Box>
  );
};

export default CartPage;
