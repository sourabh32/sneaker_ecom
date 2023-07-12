import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (<>
 
    <Link to="/cart"><div>cart</div></Link>
    
    <Link to="/"><div>home</div></Link>
    </>
  )
}

export default Header