import React from "react";
import {  Text, VStack, Button, Icon, Container } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const OrderReceivedPage = () => {
  return (
    <Container size="container.lg"  h="90vh" p={4}>
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
        <Link to="/sneakers/all">
        <Button  colorScheme="gray" size="lg">
          Continue Shopping
        </Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default OrderReceivedPage;
