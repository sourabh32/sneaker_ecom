
import { Grid, Heading } from '@chakra-ui/react'

import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
const Women = () => {
    const products = useSelector((state)=> state.productReducer.products)
  return (
    <>
    <Heading my={5} textAlign={"center"} fontFamily={"bebas neue"}>WOMENS</Heading>
   
    <Grid
      my={10}
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }} 
      gap={4} 
      px={[5,10]}
    >
        
        {
      products.length>0 &&
   
     products.filter(
        (item) => item.category == "women"
      ).map((product) => <ProductCard product={product} key={product.id} />)
     }
     
    </Grid>
    </>
  )
}

export default Women