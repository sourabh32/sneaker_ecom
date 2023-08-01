import React,  from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { clearCart } from '../../store/slices/cartSlice';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import shoe from '../../assets/shoe.png'

const CartCheckout = ({cartTotal}) => {
 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlePaymentSuccess =  () => {
        toast.success(`payement recieved`)
        
        dispatch(clearCart())
        navigate("/orderSucsess")
      };
  return (
    <StripeCheckout 
    stripeKey='pk_test_51NUP3HSEG1Jh0kubvDT7Sa8OBuLBUZ5KwmvpMZMz2YLDE7KOP9lmtG9pOGuJiIG6ACFiTig794wObyk8D0nLENvD00SOiFBO5b'
    name="SNEAK" 
    description="sneak it!" 
    image={shoe} 
    ComponentClass="div"
    panelLabel="Pay Now" 
    amount={cartTotal*100} 
    currency="USD"

    token={handlePaymentSuccess}
     />
  )
}

export default CartCheckout