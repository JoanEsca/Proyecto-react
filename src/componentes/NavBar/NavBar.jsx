import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <header className='border'>
        <h1>JoanEsca</h1>
     <nav>
        <ul>
            <li>Casco</li>
            <li>Chaquetas</li>
            <li>Lentes</li>
            <li>Guantes</li>
        </ul>
     </nav>
     <CartWidget/>
    </header>
  )
}

export default Navbar