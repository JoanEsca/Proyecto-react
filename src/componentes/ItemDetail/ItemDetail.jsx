import { useState, useContext } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, precio, img ,stock}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarCarrito} = useContext(CarritoContext);


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    // console.log("Productos agregados: " + cantidad);

    const item = {id, nombre, precio};
    agregarCarrito(item, cantidad);
  }


  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi velit itaque obcaecati amet repellendus quam quidem, voluptate harum sunt nulla modi fuga cum pariatur voluptates veritatis delectus nemo impedit?</p>


      {
        agregarCantidad > 0 ? (<Link to="/cart">Comprar</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }



    </div>
  )
}

export default ItemDetail