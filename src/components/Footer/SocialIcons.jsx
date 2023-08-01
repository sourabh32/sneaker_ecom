import React from 'react'
import {Flex, IconButton, Link} from "@chakra-ui/react"
import {FaGithub,FaLinkedinIn, FaInstagram} from "react-icons/fa"
import {motion} from "framer-motion"
const AnimatedFlex = motion(Flex)
const SocialIcons = () => {
  return (
    <AnimatedFlex initial={{ x:100,opacity: 0 }}
    whileInView={{x:0 ,opacity: 1 }}>
        
    <IconButton target='_blank'  as={Link} href="https://github.com/sourabh32" aria-label="Facebook" icon={<FaGithub />} size="lg" variant="ghost" colorScheme="blue" />
    <IconButton target='_blank' as={Link} href="https://www.instagram.com" aria-label="Twitter" icon={<FaInstagram />} size="lg" variant="ghost" colorScheme="blue" />
    <IconButton target='_blank' as={Link} href="https://www.linkedin.com/in/sourabhbharadwaj" aria-label="Instagram" icon={<FaLinkedinIn />} size="lg" variant="ghost" colorScheme="pink" />
  </AnimatedFlex>
  )
}

export default SocialIcons