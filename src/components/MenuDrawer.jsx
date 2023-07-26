import React from 'react'
import { Drawer,DrawerCloseButton,DrawerBody,DrawerContent,Text,HStack,DrawerOverlay,DrawerFooter,VStack } from '@chakra-ui/react'
import {FaGithub,FaLinkedinIn, FaInstagram} from "react-icons/fa"
const MenuDrawer = ({isOpen,onClose}) => {
  return (
    <Drawer   placement="left" onClose={()=>onClose()} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent  color={"white"}  bg="black">
            <DrawerCloseButton />
           
            <DrawerBody borderTop={"1px  solid white"} mt="10">
             <VStack h="75%" justifyContent="center" gap="5" fontWeight={"bold"}  alignItems={"flex-start"}>
           <Text>MENS</Text>
           <Text>WOMENS</Text>
           <Text>KIDS</Text>
           <Text>TOP RATED</Text>
              </VStack>
            </DrawerBody>
            <DrawerFooter borderTop="1px solid white" >
              <HStack gap="5"  w={"100%"} justifyContent={"flex-start"}>
            <FaLinkedinIn />
            <FaGithub />
            <FaInstagram />
            </HStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
  )
}

export default MenuDrawer