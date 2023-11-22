import {useContext}from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
  const {cantidadTotal} = useContext((CarritoContext));

  return (
    <div>

    <Link to="/Cart">
    <img className='imgCart' src="https://cdn.icon-icons.com/icons2/1344/PNG/96/shoppingcart_87696.png" alt="imagen de carrito de compra" />
    {
      cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
    }
    </Link>
    
    </div>
  )
}

export default CartWidget