import React, {  useEffect, useState } from "react";

const ItemCount = ({ stock, setStockSelected }) => {
  const [count, setCount] = useState(0);

 useEffect (()=> {
  setStockSelected (count)
 }, [count])

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
        <button onClick={lessCount}>➖</button>
        <span>{count}</span>
        <button onClick={moreCount}>➕</button>
      </div>
    </>
  );
};

export default ItemCount;
