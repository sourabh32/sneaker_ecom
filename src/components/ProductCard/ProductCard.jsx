import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { addItemToCart } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { BiCartAdd } from "react-icons/bi";
import LazyImage from "./LazyImage";
import { toast } from "react-hot-toast";
import {motion} from "framer-motion"
const AnimatedBox = motion(Box);
const ProductCard = ({ product }) => {
  const { brand, price, image } = product;
  const dispatch = useDispatch();
  return (
    <AnimatedBox
    initial={{ y:100,opacity: 0 }}
    whileInView={{y:0 ,opacity: 1 }}
    transition={{delay:0.5}}
      fontFamily={"poppins"}
      pos={"relative"}
      overflow="hidden"
      boxShadow="md"
    >
      <LazyImage src={image} alt="Product"  />
      {/* <Image objectFit="cover" src={image} alt="Product" /> */}

      <Box p={4}>
        <Text fontWeight="bold" fontSize="lg" mb={2}>
          {brand}
        </Text>

        <Text fontSize="lg" fontWeight={"semibold"} color="gray.500">
          ${price}
        </Text>

        <BiCartAdd
          style={{
            position: "absolute",
            right: "4%",
            top: "4%",
            cursor: 'pointer',
           
          }}
          onClick={() => {dispatch(addItemToCart({ ...product }))
          toast.success('item added')
        }}
          size={"25"}
        />
       
      </Box>
    </AnimatedBox>
  );
};

export default ProductCard;
