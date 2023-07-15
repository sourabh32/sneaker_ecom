import React from "react";
import { Link } from "react-router-dom";
import shoe from "./assets/shoe.png"
import { useSelector } from "react-redux";


const Header = () => {
const user = useSelector(state => state.userReducer.user)
const {photoURL,email} = user
  return (
    <div>
      {photoURL ? (
      <img src={photoURL} style={{height:"20px",width:"20px",borderRadius:"50%"}} alt="User Avatar" />
    ) : (
      <img style={{height:"20px",width:"20px",borderRadius:"50%"}} src={shoe} alt="Default Avatar" />
    )}
      <Link to="/cart">
        <div>cart</div>
      </Link>

      <Link to="/signIn">
        <div>sign in</div>
      </Link>
      <Link to="/signUp">
        <div>sign up</div>
      </Link>
      <Link to="/">
        <div>home</div>
      </Link>
 
    </div>
  );
};

export default Header;
