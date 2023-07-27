import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SneakerGallery from "./SneakerGallery";
import Cart from "./Cart";

import Header from "./Header";

import Auth from "./authentication/Auth";
import Home from "./pages/Home";
import { fetchProducts } from "./store/slices/productsSlice";
import { useEffect } from "react";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import { inital } from "./store/slices/displaySlice";

function App() {
  const products = useSelector((state) => state.productReducer.products);
  
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

  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneakers/all" element={<SneakerGallery />} />
     
        <Route path="/sneakers/men" element={<Men />} />
        <Route path="/sneakers/women" element={<Women />} />
        <Route path="/sneakers/kids" element={<Kids />} />
        <Route path="/authenticate" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
