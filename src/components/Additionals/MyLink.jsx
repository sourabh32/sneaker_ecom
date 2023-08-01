import { LinkBox } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MyLink = ({path,title}) => {
  return (
    <Link to={path} ><LinkBox  color="gray" fontWeight={"semibold"} fontFamily={"poppins"} textDecoration={"underline"} textAlign={"center"}>{title}</LinkBox></Link>
  )
}

export default MyLink