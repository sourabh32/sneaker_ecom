import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import SneakerGallery from "./SneakerGallery";
import Cart from "./Cart";

import Header from "./Header";

import Auth from "./authentication/Auth";
import Home from "./pages/Home";

function App() {
  const products = useSelector((state) => state.productReducer.products);

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
