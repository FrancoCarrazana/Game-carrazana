import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import "./itemCount.css";
const ItemCount = ({ stock, setStockSelected }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setStockSelected(count);
  }, [count]);

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
        <Button className="IC-button" onClick={lessCount}>
          ➖
        </Button>
        {/* <button onClick={lessCount}>➖</button> */}
        <span>{count}</span>
        <Button className="IC-button" onClick={moreCount}>
          ➕
        </Button>
        {/* <button onClick={moreCount}>➕</button> */}
      </div>
    </>
  );
};

export default ItemCount;
