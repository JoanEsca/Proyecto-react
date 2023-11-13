import { useState } from 'react'
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom'; 

const ItemDetail = ({id, stock, nombre, precio, img}) => {

  const {agregarCantidad, setAgregarCantidad} = useState(0);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("producto agragado:" + cantidad);
  }
  return ( 
    <div>
    <h2>Nombre: {nombre}</h2>
    <h3>Precio: ${precio}</h3>
    <h3>ID: {id}</h3>
    <img src={img} alt={nombre}/>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam aspernatur sit fugit sunt quibusdam distinctio quia minus culpa et nihil.</p>
    {
      //logica del montaje, y desmontaje del contador 
    }
    {
      agregarCantidad > 0 ? (<Link to="/cart"> Finalizar compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
    }

    </div>
  )
}

export default ItemDetail