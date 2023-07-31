import React from 'react'
import { Drawer,DrawerCloseButton,DrawerBody,DrawerContent,Text,HStack,DrawerOverlay,DrawerFooter,VStack,Flex,IconButton } from '@chakra-ui/react'
import {FaGithub,FaLinkedinIn, FaInstagram} from "react-icons/fa"
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'
const MenuDrawer = ({isOpen,onClose}) => {
  return (
    <Drawer   placement="left" onClose={()=>onClose()} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent colorScheme="gray"  >
            <DrawerCloseButton />
           
            <DrawerBody borderTop={"1px  solid white"} mt="10">
             <VStack h="75%" justifyContent="center" gap="5" fontWeight={"bold"}  alignItems={"flex-start"}>
              <Link to="/sneakers/men">
              
              <Text onClick={onClose}>MENS</Text></Link>
              <Link to="/sneakers/women">
              <Text onClick={onClose}>WOMENS</Text></Link>
              <Link to="/sneakers/kids">
              <Text onClick={onClose}>KIDS</Text></Link>
              <Link to="/sneakers/all">
              <Text onClick={onClose}>TOP RATED</Text></Link>
         
          
              </VStack>
            </DrawerBody>
            <DrawerFooter borderTop="1px solid white" >
            <SocialIcons />
           
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
  )
}

export default MenuDrawer