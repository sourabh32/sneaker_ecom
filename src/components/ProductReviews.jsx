import { Box, Flex, Avatar, Text, VStack, StackDivider,HStack } from '@chakra-ui/react';

// Sample data for two product reviews
const reviews = [
  {
    id: 1,
    customerName: 'John Doe',
    rating: 4,
    comment: `Great product! I loved it. Highly recommended.
    Great product! I loved it. Highly recommended.
    Great product! I loved it. Highly recommended.
    Great product! I loved it. Highly recommended.`,
    
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    rating: 5,
    comment: `Great product! I loved it. Highly recommended.
    Great product! I loved it. Highly recommended.
    Great product! I loved it. Highly recommended.
    Great product! I loved it. Highly recommended.`,
    
  },
];

const ProductReviews = () => {
  return (
    <HStack my="10" fontFamily={"poppins"} spacing="4" align="stretch" >
      {reviews.map((review) => (
        <Flex key={review.id} p="4"   >
         
          <VStack ml="4" align="start" spacing="1">
            <Text fontWeight="semibold">{review.customerName}</Text>
            <Box>
             
              {Array.from({ length: review.rating }).map((_, index) => (
                <Box as="span" key={index} color="Black" fontSize="sm" mr="1">
                  ★
                </Box>
              ))}
              
              {Array.from({ length: 5 - review.rating }).map((_, index) => (
                <Box as="span" key={index} color="gray.300" fontSize="sm" mr="1">
                  ★
                </Box>
              ))}
            </Box>
            <Text fontSize="sm" color="gray.600">
              {review.comment}
            </Text>
            
          </VStack>
        </Flex>
      ))}
    </HStack>
  );
};

export default ProductReviews;
