import React from "react";
import { Grid, Box, Image, Text, Link } from "@chakra-ui/react";
import men from "../../assets/men.jpg";
import women from "../../assets/men.jpg";
import kids from "../../assets/men.jpg";

import MyLink from "./MyLink";

const ShopCategory = () => {
  const categories = [
    {
      id: 1,
      image: men,
      name: "MEN",
      link: "/sneakers/men",
    },
    {
      id: 2,
      image: women,
      name: "WOMEN",
      link: "/sneakers/women",
    },
    {
      id: 3,
      image: kids,
      name: "KIDS",
      link: "/sneakers/kids",
    },
  ];

  return (
    <Grid
      bg={"gray.200"}
      fontFamily={"poppins"}
      mt={10}
      p={ 10}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4}
    >
      {categories.map((category) => (
        <Box
          key={category.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            objectFit={"cover"}
            h="40vh"
            w="full"
            src={category.image}
            alt={category.name}
          />

          <Text
            my="5"
            textAlign={"center"}
            fontWeight="bold"
            fontSize="lg"
            mt={2}
          >
            {category.name}
          </Text>

          <MyLink title={"browse category"} path={category.link} />
        </Box>
      ))}
    </Grid>
  );
};

export default ShopCategory;
