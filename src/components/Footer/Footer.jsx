import { Box, Flex, IconButton, Link, Text, VStack } from '@chakra-ui/react';
import SocialIcons from './SocialIcons';

const Footer = () => {
    return (
      <Box fontFamily={"poppins"} as="footer"  bg="gray.100" bottom="0" left="0" right="0" pos="relative"  py="6">
        <VStack spacing="2">
          <SocialIcons />
         
         
          <Text fontWeight={"semibold"} fontSize="sm" color="gray.600">
            @created and developed by sourabh32
          </Text>
        </VStack>
      </Box>
    );
  };
export default Footer  