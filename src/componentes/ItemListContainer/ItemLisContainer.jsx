import { useState, useEffect } from "react";

import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    const {idCategory} = useParams();
    useEffect( ()=> {
        const misProducts = idCategory ? query(collection(db,"products"), where("idCat", "==", idCategory)) : collection(db, "products");

        getDocs(misProducts)
            .then(res =>{
                const newProducts = res.docs.map(doc =>{
                    const data = doc.data()
                    return {id:doc.id, ...data}
                });
                setProducts(newProducts);
            })
            .catch(error => console.log(error))
    },[idCategory])
   

    return (
        <>
            <h2>Acesorios para tu moto</h2>
            <ItemList products={products} />
        </>
    )
}

export default ItemListContainer