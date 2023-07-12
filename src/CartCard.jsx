import React from 'react';
import { addItemToCart, decreItemFromCart, removeItemFromCart } from './store/slices/cartSlice';
import { useDispatch } from 'react-redux';

const CartCard = ({product} ) => {
  const {id,image,price,quantity} = product

const dispatch = useDispatch()
  return (
    <div className="product-card">
      
    <img style={{width:"200px",height:"200px",objectFit:"cover"}} src={image} />
      <p>#{id}</p>
      <p>${price}</p>
      <div className="quantity-controls">
        <button onClick={()=>dispatch(decreItemFromCart(id))}>-</button>
        <span>{quantity}</span>
        <button onClick={()=>dispatch(addItemToCart({...product}))}>+</button>
      </div>
      <button onClick={()=>dispatch(removeItemFromCart(id))}>X</button>
    </div>
  );
};

export default CartCard