
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import SneakerGallery from "./SneakerGallery"
import Cart from "./Cart"
import { useEffect } from "react"
import { fetchProducts } from "./store/slices/productsSlice"

import Header from "./Header"
import { auth } from "./firebaseConfig"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import { onAuthStateChanged } from "firebase/auth"
import { setUser } from "./store/slices/userSlice"





function App() {
  const products = useSelector(state => state.productReducer.products)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser)
      if (currentUser) {
        dispatch(setUser({photoURL:currentUser.photoURL,email:currentUser.email}));
      } else {
        dispatch(setUser({
          email:null,
          photoURL:null
      }));
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
   

console.log(products)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SneakerGallery />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUP" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
     
      </Routes>
  
    </Router>
  )
}

export default App
