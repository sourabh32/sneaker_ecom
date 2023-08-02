import React, {  useMemo } from 'react';
import { Box, Image, Text, Button, Stack, Container } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addItemToCart } from '../store/slices/cartSlice';
import Loader from '../components/Additionals/Loader';

const ProductDetailsPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const products = useSelector(state=> state.productReducer.products)
  
  const productDict = useMemo(() => {
    const dict = {};
    products.forEach(product => {
      dict[product.id] = product;
    });
    return dict;
  }, [products]);

  
  const product = productDict[parseInt(id)];
 

  









  
  return (
    <>
    {
        product ? ( <Container fontFamily={"poppins"} maxW={"container.lg"} my="10" p={4}>
        <Link  to="/"  ><Button my="2" variant={"link"}>Back</Button></Link>
        <Stack gap="10" flexDirection={["column","row"]} justifyContent="center" alignItems="center">
          <Box maxW="400px"
            maxH="400px"
            borderRadius={10} overflow={"hidden"} >
        <Image
        
            src={product.image}
            alt={product.name}
            w="full"
            h="full"
            transform="scale(1)"
            transition="transform 0.2s ease-out"
            _hover={{ transform: 'scale(1.1)' }} 
          />
          </Box>
      
        <Box mt={4}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            {product.brand} 
          </Text>
          <Text mb={4}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae inventore possimus assumenda ducimus! Dolorum excepturi ab incidunt est necessitatibus nostrum architecto quasi quidem accusantium laboriosam facilis, debitis culpa magni vel.</Text>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Price: ${product.price}
          </Text>
          <Button  onClick={() => {dispatch(addItemToCart({ ...product }))
            toast.success('item added')
          }}  colorScheme="gray" size="md">
            Add to Cart
          </Button>
        </Box>
        </Stack>
      </Container>):(<Box h="90vh">
        <Loader />
      </Box>)
    }
</>
  );
};

export default ProductDetailsPage;
