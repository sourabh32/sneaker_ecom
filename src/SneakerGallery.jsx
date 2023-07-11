import React, { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import {  useSelector } from "react-redux";

import Filter from "./Filter";


function SneakerGallery() {
  const display = useSelector((state) => state.displayReducer.displayProducts);

 
  
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
