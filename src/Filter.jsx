import React, {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { clear, filterByCategory, filterBySort } from "./store/slices/displaySlice";

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
    <div>
      <select value={selectedSort} onChange={handleSortChange}>
        <option value="">Sort By</option>
        <option value="lth">Price (Lowest)</option>
        <option value="htl">Price (Highest)</option>
        <option value="p">Popularity (High)</option>
      </select>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">All</option>
        <option value="mens">Mens</option>
        <option value="womens">Womens</option>
        <option value="kids">Kids</option>
      </select>
      <button onClick={handleClear}>Clear Filters</button>
    </div>
  );
};

export default Filter;
