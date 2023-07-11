

import { useDispatch, useSelector } from "react-redux"
import SneakerGallery from "./SneakerGallery"
import Cart from "./Cart"
import { useEffect } from "react"
import { fetchProducts } from "./store/slices/productsSlice"
import { inital } from "./store/slices/displaySlice"





function App() {
  const products = useSelector(state => state.productReducer.products)
  
  const dispatch = useDispatch()
  useEffect(() => {
    const fetchData =  () => {
       dispatch(fetchProducts());
    
    };
    fetchData()
  }, []);
  
  useEffect(()=>{
    if(products.length>0){
      dispatch(inital(products))
    }
  },[products])

  
   

console.log(products)

  return (
    <>
    <Cart />
    <SneakerGallery />
    </>
  )
}

export default App
