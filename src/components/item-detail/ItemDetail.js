import { useState } from "react";
import ItemCount from "../item-count/itemCount";

const ItemDetail = ({ name, description, price, id, stock, image, setSelectedItem }) => {


    const [stockSelected, setStockSelected] = useState(0);
    const selectedItem = () => setSelectedItem({ name, description, price, id, image, stock: stockSelected });
    return (
        <div onClick={selectedItem}>
            <h2>{name}</h2>
            <h2>${price}</h2>
            <span>{image}</span>
            <ItemCount stock={stock} setStockSelected={setStockSelected} />
            <br/>
            {/* <button onClick={selectedItem}>🛒</button> */}
            <hr />
        </div>
    );    
}

export default ItemDetail ;