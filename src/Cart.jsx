import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const Cart = () => {
      
    const items = useSelector(state=> state.cartReducer.cartItems)
  

  
    console.log(items)
  return (
    <div className='cart-container'>{
        items.map((item)=> <CartCard product={item} key={item.id}/>)
    }</div>
  )
}

export default Cart