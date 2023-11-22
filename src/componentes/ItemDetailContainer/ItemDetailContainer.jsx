import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null);

    const {idItem} = useParams();

   useEffect( ()=> {
    const newDoc = doc(db, "prodocts", idItem);

    getDoc(newDoc)
      .then(res => {
        const data = res.data();
        const newProducts = {id: res.id, ...data}
        setProducts(newProducts);
      })
      .catch(error => console.log(error))
   },[idItem]) 


  return (
    <div>
        <ItemDetail {...products}/>
    </div>
  )
}

export default ItemDetailContainer