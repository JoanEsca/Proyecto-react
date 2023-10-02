import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  return (
    <header>
        <h1>JoanEsca</h1>
     <nav>
        <ul>
            <li>Pantalon</li>
            <li>Poleras</li>
            <li>Polerones</li>
            <li>Accesorios</li>
        </ul>
     </nav>
     <CartWidget/>
    </header>
  )
}

export default Navbar