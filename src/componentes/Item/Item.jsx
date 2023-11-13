import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='card'>
        <img src={img} alt={nombre} />
        <h3>Nombre: {nombre} </h3>
        <p>Precio: ${precio} </p>
        <p>ID: {id} </p>
        <button>
        <Link to={`/item/${id}`}> Detalles del producto</Link>
        </button>
    </div>
  )
}

export default Item