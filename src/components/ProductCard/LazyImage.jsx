import React, { useState } from 'react'
import { Box, Image } from '@chakra-ui/react';

import Loader from '../Additionals/Loader';

const LazyImage = ({src,alt}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
         {!imageLoaded && 
         <Box w="100%" h="100%">
          <Loader />
         </Box>
         }
         <Box overflow={"hidden"}>
    <Image
      src={src}
      alt={alt}
  objectFit="cover"
  onLoad={handleImageLoad}
loading='lazy'
transition="transform 0.3s ease-out"
_hover={{ transform: 'scale(1.3)' }} 
    />
    </Box>
  </>
  )
}

export default LazyImage