import React from 'react';
import { Link } from 'react-router-dom'



const Header = () => {
  return (


    <nav>
      <div className="container nav__container">
        <Link to='/' className='nav__logo'>

        {/* Logo of the website will be here */}
        
        </Link>
        <ul className="nav__menu">
          <li ><Link to='/profile/sdfsdf'>Home</Link></li> 
          <li ><Link to='/create'>Home</Link></li>
          <li ><Link to='/authors'>Home</Link></li>
          <li className='button btn primary' ><Link to='/login'>Login</Link></li>
        </ul>
        <button className="nav__toggle-btn">
          
        </button>
      </div>
    </nav>
  )
}

export default Header