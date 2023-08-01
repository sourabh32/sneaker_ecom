import React from 'react'
import {Flex, IconButton, Link} from "@chakra-ui/react"
import {FaGithub,FaLinkedinIn, FaInstagram} from "react-icons/fa"

const SocialIcons = () => {
  return (
    <Flex>
        
    <IconButton target='_blank'  as={Link} href="https://github.com/sourabh32" aria-label="Facebook" icon={<FaGithub />} size="lg" variant="ghost" colorScheme="blue" />
    <IconButton target='_blank' as={Link} href="https://www.instagram.com" aria-label="Twitter" icon={<FaInstagram />} size="lg" variant="ghost" colorScheme="blue" />
    <IconButton target='_blank' as={Link} href="https://www.linkedin.com/in/sourabhbharadwaj" aria-label="Instagram" icon={<FaLinkedinIn />} size="lg" variant="ghost" colorScheme="pink" />
  </Flex>
  )
}

export default SocialIcons