import { useState, createContext } from 'react'


export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
});

export const CarritoProvider = ({children}) => {
    const [carrito, setcarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [cantidadTotal, setCantidadTotal] = useState(0);

    console.log(carrito);

    const agregarCarrito = (item, cantidad) => {
        const productExistente = carrito.find(prod => prod.item.id === item.id);

        if(!productExistente) {
          setcarrito(prev => [...prev, {item, cantidad}]);  
          setCantidadTotal(prev => prev + cantidad);
          setTotal(prev => prev + (item.precio * cantidad));
        }else{
          const cartActualizado = carrito.map( prod =>{
            if(prod.item.id === item.id) {
              return{...prod, cantidad: prod.cantidad + cantidad};
            }else{
              return prod;
            }
          })
          setcarrito(cartActualizado);
          setCantidadTotal(prev => prev + cantidad);
          setTotal( prev => prev + (item.precio * cantidad));
        }
    }

    const eliminarProduct = (id) =>{
      const productEliminado = carrito.find(prod => prod.itme.id === id);
      const cartActualizado = carrito.filter(prod => prod.item.id !== id);
      
      setcarrito(cartActualizado);
      setCantidadTotal(prev => prev - productEliminado.cantidad);
      setTotal(prev => prev - (productEliminado.item.precio * productEliminado.cantidad));
    }

    const vaciarCart = () =>{
      setcarrito([]);
      setTotal(0);
      setCantidadTotal(0);
    }

  return (
    <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarCarrito, eliminarProduct, vaciarCart}}>
    {children}
    </CarritoContext.Provider>
  )
}

export default CarritoProvider