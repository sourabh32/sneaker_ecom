import React, { useState } from 'react'
import { Box, Image } from '@chakra-ui/react';

import Loader from '../Loader';

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
    <Image
      src={src}
      alt={alt}
  objectFit="cover"
  onLoad={handleImageLoad}
loading='lazy'
    />
  </>
  )
}

export default LazyImage