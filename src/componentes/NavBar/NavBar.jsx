import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='border'>
      <Link to="/">
        <h1>JoanEsca</h1>
      </Link>

     <nav>
        <ul>
            <li>
              <NavLink to="category/2">Casco</NavLink>    
            </li>

            <li>
              <NavLink to="category/2">Chaquetas</NavLink>    
            </li>

            <li>
              <NavLink to="category/3">Lentes</NavLink>    
            </li>

            <li>
              <NavLink to="category/3">Guantes</NavLink>    
            </li>

        </ul>
     </nav>
     <CartWidget/>
    </header>
  )
}

export default Navbar