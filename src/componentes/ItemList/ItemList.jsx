import Item from "../Item/Item";
import './ItemLis.css';

const ItemList = ({products}) => {
  return (
    <div className="containerProducts">
        {products.map(item => <Item key={item.id} {...item} /> )}
    </div>
  )
}

export default ItemList