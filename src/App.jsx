import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SneakerGallery from "./SneakerGallery";
import Cart from "./Cart";

import Header from "./Header";

import Auth from "./authentication/Auth";
import Home from "./pages/Home";
import { fetchProducts } from "./store/slices/productsSlice";
import { useEffect } from "react";

function App() {
  const products = useSelector((state) => state.productReducer.products);
  
const dispatch = useDispatch()

useEffect(() => {
  const fetchData =  () => {

     dispatch(fetchProducts());
  
  };
  fetchData()
}, []);

  console.log(products);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sneakers" element={<SneakerGallery />} />
        <Route path="/authenticate" element={<Auth />} />

        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
