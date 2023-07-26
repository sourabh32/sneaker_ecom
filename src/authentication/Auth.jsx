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
  console.log(user);

  return (
    <Container fontFamily={"poppins"} centerContent mt={8}>

      {
        user ? (
          <VStack spacing={4}>
            {/* User profile information */}
            <Image src={user.photoURL} alt="User Profile" boxSize="100px" rounded="full" />
            <Heading fontSize="lg">{user.displayName}</Heading>
            <Box>{user.email}</Box>
            {/* Sign-out button */}
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

// <div className="body">
//   <div className="auth-container">
//     <h2>Welcome!</h2>

//     { user ? (<>
//     <p>{user.email}</p>
//     <img src={user.photoURL} style={{width:"20px",height:"20px"}}/>
//      <button onClick={handleSignOut} className="auth-button signout">Sign Out</button></>):(<>
//       <p>Please sign in to continue.</p>
//      <button onClick={handleGoogle} className="auth-button google">Sign in with Google</button>
//     <button onClick={handleGitHub} className="auth-button github">Sign in with GitHub</button></>)}

//   </div>
// </div>
