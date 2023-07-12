import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const Cart = () => {
      
    const items = useSelector(state=> state.cartReducer.cartItems)
    console.log(items)
    let cartTotal= items.reduce((a,b)=>a.quantity*a.price+b.quantity*b.price)
    let cartQuantity= items.length
     
  
  return (
    <>
    <h1>cart</h1>
    <div className="cartstats">
      <p>Quantity:{cartQuantity}</p>
      <p>cartTotal:{cartTotal}</p>
    </div>
     <div className='cart-container'>{
        items.map((item)=> <CartCard product={item} key={item.id}/>)
    }</div>
    
    </>
   
  )
}

export default Cart