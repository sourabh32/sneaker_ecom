import React from "react";
import { Box, Text, VStack, Button, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const OrderReceivedPage = () => {
  return (
    <Box  h="90vh" p={4}>
      <VStack textAlign={"center"} justifyContent={"center"} spacing={4} align="center">
        <Icon as={CheckCircleIcon} boxSize={12} color="green.500" />
        <Text fontSize="2xl" fontWeight="semibold">
          Order Received!
        </Text>
        <Text>Your order has been successfully placed.</Text>
        <Text>Order ID: 123456789</Text>
        <Text>
          You will receive a confirmation email shortly with your order details.
        </Text>
        <Button  colorScheme="teal" size="lg">
          Continue Shopping
        </Button>
      </VStack>
    </Box>
  );
};

export default OrderReceivedPage;
