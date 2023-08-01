import React, { useContext } from "react";
import {
  signInWithGithub,
  signInWithGoogle,
  logOut,
} from "../firebaseFunctions";

import { userContext } from "../context/UserContext";
import { Container, Button, VStack, Text, Heading, Image, Box } from "@chakra-ui/react";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
const Auth = () => {
  const user = useContext(userContext);

  console.log(user)
  return (
    <Container h="90vh" fontFamily={"poppins"} centerContent mt={8}>

      {
        user ? (
          <VStack spacing={4}>
           
            <Image src={user.photoURL} alt="User Profile" boxSize="100px" rounded="full" />
            <Heading fontSize="lg">{user.displayName}</Heading>
            <Box>{user.email}</Box>
           
            <Button onClick={() => logOut()} colorScheme="blue" size="sm" w="50%">
          Sign Out
        </Button>
          </VStack>
        ):(<>
        <Text fontFamily={"bebas neue"} textAlign={"center"}>
        Simplify Your Sign-In: Go Beyond Email & Password with Google and
        GitHub!
      </Text>
      <VStack my="5" spacing={4}>
        <Button
          onClick={() => signInWithGoogle()}
        colorScheme="blue"
          size="md"
          w="100%"
        >
          <AiFillGoogleCircle />
          <Text ml="2">Sign in with Google</Text>
        </Button>
        <Button
          onClick={() => signInWithGithub()}
          colorScheme="gray"
          size="md"
          w="100%"
        >
          <AiFillGithub />
          <Text ml="2">Sign in with Github</Text>
        </Button>
       
      </VStack>
      </>)
      }
      
    </Container>
  );
};

export default Auth;


