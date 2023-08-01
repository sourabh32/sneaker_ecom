import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/slices/productsSlice";
import React, { Suspense, useEffect } from "react";
import { inital } from "./store/slices/displaySlice";


import Header from "./components/Header/Header";
import Loader from "./components/Additionals/Loader";
import { Box } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";


const Home = React.lazy(() => import("./pages/Home"));
const SneakerGallery = React.lazy(() => import("./components/Display/SneakerGallery"));
const Men = React.lazy(() => import("./components/Display/Men"));
const Women = React.lazy(() => import("./components/Display/Women"));
const Kids = React.lazy(() => import("./components/Display/Kids"));
const Auth = React.lazy(() => import("./authentication/Auth"));
const Cart = React.lazy(() => import("./pages/Cart"));
const Footer = React.lazy(()=>import("./components/Footer/Footer"))
const OrderReceivedPage = React.lazy(()=> import("./components/Additionals/OrderSucsess"))



function App() {
  const products = useSelector((state) => state.productReducer.products);
  
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchProducts())
}, []);

useEffect(()=>{
  if(products.length>0){
    dispatch(inital(products))
  }
},[products])

  

  return (
    <Router>
      <Toaster position="bottom" />
      <Header />
      <Suspense fallback={
        <Box w="100%" h="90vh">
         <Loader />
         </Box>
        
      }>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneakers/all" element={<SneakerGallery />} />
     
        <Route path="/sneakers/men" element={<Men />} />
        <Route path="/sneakers/women" element={<Women />} />
        <Route path="/sneakers/kids" element={<Kids />} />
        <Route path="/authenticate" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderSucsess" element={<OrderReceivedPage  />} />
      </Routes>
      <Footer />
      </Suspense >

    </Router>
  );
}

export default App;
