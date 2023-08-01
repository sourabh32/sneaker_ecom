import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clear, filterByCategory, filterBySort } from "./store/slices/displaySlice";
import { Button, HStack, Select } from "@chakra-ui/react";
import {motion} from "framer-motion"
const AnimatedHStack = motion(HStack);
const Filter = () => {
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory,setSelectedCategory] = useState("")
  const dispatch = useDispatch();
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedSort(selectedOption);
  
  };
  const handleCategoryChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedCategory(selectedOption);
   
  };


  useEffect(() => {
    if (selectedSort !== "") {
      dispatch(filterBySort(selectedSort));
    }
  }, [selectedSort, dispatch]);
  
  useEffect(() => {
    if (selectedCategory !== "") {
      dispatch(filterByCategory(selectedCategory));
    }
  }, [selectedCategory, dispatch]);
  


  const handleClear = () =>{
    setSelectedCategory("")
    setSelectedSort("")
    dispatch(clear())
  }
  return (
    <AnimatedHStack
    overflow={"hidden"}
    initial={{ x:-100,opacity: 0 }}
    whileInView={{x:0 ,opacity: 1 }} transition={{delay:0.5}}  fontFamily={"poppins"}  mx="10%" flexWrap={"wrap"}>

      
      <Select fontWeight={"bold"} w="45%" variant={"filled"} value={selectedSort} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="lth">Price (Lowest)</option>
        <option value="htl">Price (Highest)</option>
        <option value="p">Popularity (High)</option>
      </Select>
      <Select fontWeight={"bold"}  variant={"filled"} w="45%"   value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="mens">Mens</option>
        <option value="womens">Womens</option>
        <option value="kids">Kids</option>
      </Select>
      <Button onClick={handleClear}>Clear Filters</Button>
    </AnimatedHStack>
  );
};

export default Filter;
