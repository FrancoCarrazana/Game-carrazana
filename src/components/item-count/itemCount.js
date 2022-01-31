import React, {  useState } from "react";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);



  const lessCount = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const moreCount = () => {
    if (count >= stock) return;
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h4>Elegir unidades</h4>
        <br/>
        <button onClick={lessCount}>-</button>
        <span>{count}</span>
        <button onClick={moreCount}>+</button>
        <br/>
        <button>Agregar al carrito</button>
      </div>
    </>
  );
};

export default ItemCount;
