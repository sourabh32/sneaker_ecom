import React from 'react';
import shoe from "./assets/shoe.png"
import { addItemToCart } from './store/slices/cartSlice';
import { useDispatch } from 'react-redux';
const ProductCard = ({ product }) => {
  const {image,brand,review,price,category,id} = product
  const dispatch = useDispatch()
  return (
    <div className="product-card">
      <img loading='lazy' src={`${image ? image : shoe}`} alt={brand} className="product-image" />
      <h3 className="brand-name">{brand}</h3>
      <button onClick={()=>dispatch(addItemToCart({...product}))}>+</button>
      <p className="price">${price}</p>
      <p>{category}</p>
      <p>{review}</p>
      {/* <div className="review">
        {Array.from({ length: review }, (_, index) => (
          <span key={index} className="star">&#9733;</span>
        ))}
      </div> */}
    </div>
  );
};

export default ProductCard;