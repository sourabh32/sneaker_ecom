import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
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
  )
}

export default Logo