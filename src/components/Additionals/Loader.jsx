import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box display={"grid"} placeContent={"center"}  w="100%" h="full">
    <Spinner size='xl' />
    </Box>
  )
}

export default Loader