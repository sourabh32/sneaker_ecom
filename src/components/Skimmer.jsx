import { Skeleton, Stack, VStack } from '@chakra-ui/react'
import React from 'react'

const Skimmer = () => {
  return (
    <VStack spacing={2} w="100%">
  <Skeleton height='20px' />
  <Skeleton height='20px' />
  <Skeleton height='20px' />
</VStack>
  )
}

export default Skimmer