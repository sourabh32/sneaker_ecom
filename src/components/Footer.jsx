import { Box, Flex, IconButton, Link, Text, VStack } from '@chakra-ui/react';
import {FaGithub,FaLinkedinIn, FaInstagram} from "react-icons/fa"
const Footer = () => {
    return (
      <Box as="footer" bg="gray.100" py="6">
        <VStack spacing="4">
          {/* Social Media Icons */}
          <Flex>
            <IconButton as={Link} href="#" aria-label="Facebook" icon={<FaGithub />} size="lg" variant="ghost" colorScheme="blue" />
            <IconButton as={Link} href="#" aria-label="Twitter" icon={<FaInstagram />} size="lg" variant="ghost" colorScheme="blue" />
            <IconButton as={Link} href="#" aria-label="Instagram" icon={<FaLinkedinIn />} size="lg" variant="ghost" colorScheme="pink" />
          </Flex>
          {/* Footer Links */}
          <Flex>
            <Link href="#" mr="4">
              About Us
            </Link>
            <Link href="#" mr="4">
              Contact Us
            </Link>
            <Link href="#" mr="4">
              Terms of Service
            </Link>
            <Link href="#">
              Privacy Policy
            </Link>
          </Flex>
          {/* Copyright */}
          <Text fontSize="sm" color="gray.600">
            &copy; {new Date().getFullYear()} Your E-Commerce Company. All rights reserved.
          </Text>
        </VStack>
      </Box>
    );
  };
export default Footer  