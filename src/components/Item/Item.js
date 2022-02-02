import { useState } from "react";
import ItemCount from "../item-count/itemCount";

const Item = ({ name, description, price, id, stock, image, setSelectedItem }) => {
    const [stockSelected, setStockSelected] = useState (0); 
    const selectedItem = () => setSelectedItem ({name, description, price, id, image, stock: stockSelected})   ;
    return (
        <>
        <h2>nombre del producto: {name}</h2>
        <h2>description del producto: {description}</h2>
        <h2>stock del producto: {stock}</h2>
        <h2>precio del producto: {price}</h2>
        <span>{image}</span>
        <ItemCount stock={stock} setStockSelected={setStockSelected} />
        <button onClick={selectedItem}>seleccionar producto</button>
        <hr/>
        </>
    );
    };
export default Item ;