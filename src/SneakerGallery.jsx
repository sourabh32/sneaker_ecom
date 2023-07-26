import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import {  useDispatch, useSelector } from "react-redux";

import Filter from "./Filter";
import { inital } from "./store/slices/displaySlice";
import { fetchProducts } from "./store/slices/productsSlice";


function SneakerGallery() {
  const display = useSelector((state) => state.displayReducer.displayProducts);
  const products = useSelector((state)=> state.productReducer.products)


  useEffect(()=>{
    if(products.length>0){
      dispatch(inital(products))
    }
  },[products])
 
  
if(display.length == 0){
  return <h2>loading ...</h2>
}
  return (
    <>
      <Filter />
      <div className="product-container">
        {display.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </>
  );
}

export default SneakerGallery;
