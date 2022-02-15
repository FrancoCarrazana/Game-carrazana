
import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../item-count/itemCount";

const Item = ({ id, name, price, description, image, stock }) => {
    const [setStockSelected] = useState(0);
  
    return (
      <>
        <div>
          <h2>Nombre del producto: {name}</h2>
          {/* <h2>Descripción del producto: {description}</h2> */}
          {/* <h2>stock del producto: {stock}</h2> */}
          <h2>precio del producto: {price}</h2>
          <span>{image}</span>
          <ItemCount stock={stock} setStockSelected={setStockSelected} /> 
          <br/>
          <Link to={`/item/${id}`}>Seleccionar producto</Link>
        </div>
        <hr />
      </>
    );
  };
  
  export default Item;