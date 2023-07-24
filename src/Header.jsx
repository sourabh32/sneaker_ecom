import React from "react";
import { Link } from "react-router-dom";


const Header = () => {


  return (
    <div>
    
      <Link to="/cart">
        <div>cart</div>
      </Link>

      <Link to="/authenticate">
        <div>authenticate</div>
      </Link>
     
      <Link to="/">
        <div>home</div>
      </Link>
 
    </div>
  );
};

export default Header;
