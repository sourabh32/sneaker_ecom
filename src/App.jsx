import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/slices/productsSlice";
import React, { useEffect } from "react";
import { inital } from "./store/slices/displaySlice";


import Header from "./Header";
import Loader from "./Loader";
import { Box } from "@chakra-ui/react";
const Home = React.lazy(() => import("./pages/Home"));
const SneakerGallery = React.lazy(() => import("./SneakerGallery"));
const Men = React.lazy(() => import("./components/Men"));
const Women = React.lazy(() => import("./components/Women"));
const Kids = React.lazy(() => import("./components/Kids"));
const Auth = React.lazy(() => import("./authentication/Auth"));
const Cart = React.lazy(() => import("./pages/Cart"));




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
      <Header />
      <React.Suspense fallback={
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
      </Routes>
      </React.Suspense >
    </Router>
  );
}

export default App;
