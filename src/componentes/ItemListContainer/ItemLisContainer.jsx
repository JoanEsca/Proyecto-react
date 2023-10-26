import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductos()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <h2>Acesorios para tu moto</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer