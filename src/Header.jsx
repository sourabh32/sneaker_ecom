import React from "react";
import { Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

import { Box, useDisclosure, HStack } from "@chakra-ui/react";
import CartDrawer from "./components/CartDrawer";
import MenuDrawer from "./components/MenuDrawer";

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
      <Box  bg="rgba(0, 0, 0, 0)" 
      color="gray.900"
      pos="sticky"
      top="0"
      left="0"
      width="100%"
   
      zIndex="1"  p={2}>
        <HStack justifyContent={"space-between"} alignItems="center">
          <Box>
            <RxHamburgerMenu
              size="20"
              cursor={"pointer"}
              onClick={onOpenDrawer1}
            />
          </Box>
          <Box>
            <Link  to="/"><span style={{
    fontFamily: "Bebas Neue, sans-serif",
    color:"white",
    fontSize: "2rem",
    textShadow: "0 0 5px black, 0 0 5px black, 0 0 5px black",
    fontWeight: "bold",
 
    textTransform: "uppercase",
    
    cursor: "pointer",
  }}>SNEAK.</span></Link>
          </Box>

          <Box>
            <HStack gap={5}>
              <Link to="/authenticate">
                <HiOutlineUserCircle size="20" />
              </Link>

              <BsHandbag onClick={onOpenDrawer2} size="20" />
            </HStack>
          </Box>
        </HStack>
      </Box>
      <CartDrawer isOpen={isOpenDrawer2} onClose={onCloseDrawer2} />
      <MenuDrawer isOpen={isOpenDrawer1} onClose={onCloseDrawer1} />
    </>
  );
};

export default Header;
