import { useState, useEffect } from "react";
import { getProductos, getProductsCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {idCategory} = useParams();

    useEffect(() => {
        const funcionProducts = idCategory ? getProductsCategory : getProductos;
        
        funcionProducts(idCategory)
            .then(res => setProducts(res))

        },[idCategory])

    return (
        <>
            <h2>Acesorios para tu moto</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer