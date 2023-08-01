import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import {motion} from "framer-motion"
const AnimatedBox = motion(Box);
import { Box, useDisclosure, HStack } from "@chakra-ui/react";
import CartDrawer from "../Cart/CartDrawer";
import MenuDrawer from "./MenuDrawer";
import Logo from "./Logo";

const Header = () => {
  
  const {
    isOpen: isOpenDrawer1,
    onOpen: onOpenDrawer1,
    onClose: onCloseDrawer1,
  } = useDisclosure();


  const {
    isOpen: isOpenDrawer2,
    onOpen: onOpenDrawer2,
    onClose: onCloseDrawer2,
  } = useDisclosure();

  return (
    <>
      <AnimatedBox  bg="rgba(0, 0, 0, 0)" 
      overflow={"hidden"}
      color="gray.900"
      pos="sticky"
      top="0"
      left="0"
      width="100%"
      initial={{ x:-100,opacity: 0 }}
    whileInView={{x:0 ,opacity: 1 }}
  
      zIndex="1"  p={2}>
        <HStack justifyContent={"space-between"} alignItems="center">
        <Logo />
         
         

          <Box>
            <HStack py="2" borderBottomRadius={"4"} borderBottom={"4px solid black"} gap={5}>
              <Link to="/authenticate">
                <HiOutlineUserCircle  size="20" />
              </Link>

              <BsHandbag cursor={"pointer"}  onClick={onOpenDrawer2} size="20" />
            </HStack>
          </Box>
          <Box >
            <RxHamburgerMenu
            
              size="20"
              cursor={"pointer"}
              onClick={onOpenDrawer1}
            />
          </Box>
          
        </HStack>
      </AnimatedBox>
      
      <CartDrawer isOpen={isOpenDrawer2} onClose={onCloseDrawer2} />
      <MenuDrawer isOpen={isOpenDrawer1} onClose={onCloseDrawer1} />
    </>
  );
};

export default Header;
