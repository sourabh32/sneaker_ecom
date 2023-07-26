import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartCard from './CartCard'
import StripeCheckout from 'react-stripe-checkout'
import { clearCart } from './store/slices/cartSlice'

const Cart = () => {
      
    const items = useSelector(state=> state.cartReducer.cartItems)
    console.log(items)
    let cartTotal= items.reduce((a,b)=>a+b.quantity*b.price,0)
    let cartQuantity= items.length
     const dispatch = useDispatch()
  
    const handlePaymentSuccess = (token) => {
      // Logic to clear the cart
      dispatch(clearCart())
      // Additional logic or API calls as needed after successful payment...
    };
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

    <StripeCheckout 
    stripeKey='pk_test_51NUP3HSEG1Jh0kubvDT7Sa8OBuLBUZ5KwmvpMZMz2YLDE7KOP9lmtG9pOGuJiIG6ACFiTig794wObyk8D0nLENvD00SOiFBO5b'
    name="Three Comma Co." // the pop-in header title
    description="Big Data Stuff" // the pop-in header subtitle
    image="./assets/shoe.png" 
    ComponentClass="div"
    panelLabel="Pay Now" 
    amount={cartTotal*100} 
    currency="USD"
    
    token={handlePaymentSuccess}
     />

    
    </>
   
  )
}

export default Cart