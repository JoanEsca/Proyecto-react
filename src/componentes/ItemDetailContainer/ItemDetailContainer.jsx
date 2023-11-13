import { useState, useEffect } from "react";
import { getUnProducts } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getUnProducts(idItem)
        .then(repuesta => setProducts(repuesta))

    },[idItem])



  return (
    <div>
        <ItemDetail {...products}/>
    </div>
  )
}

export default ItemDetailContainer