import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemCount from "../item-count/itemCount";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";
import Button from "react-bootstrap/esm/Button";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();
  // const [inputInfo] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  // const [comments, setComments] = useState ('');
  const { addItem } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addItem({
      item: selectedItem,
      quantity,
    });
  };

  // const onAdd = (event, message) => {
  //   event.stopPropagation();
  //   console.log("Message: " + message);
  //   setComments((comments) => [...comments, inputInfo]);
  // };

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  return (
    <div className="ITD" key={id}>
      <h2>Producto seleccionado</h2>
      <img
        className="ITD-img"
        src={selectedItem && selectedItem.image}
        alt={selectedItem && selectedItem.name}
      />
      <h4>{selectedItem && selectedItem.name}</h4>
      <p>{selectedItem && selectedItem.stock}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK: {selectedItem && selectedItem.stock}</p>
      <ItemCount
        className="ITD-button"
        stock={selectedItem?.stock}
        setStockSelected={setQuantity}
      />
      <br />
      <Button className="ITD-button" onClick={handleAddToCart}>
        Agregar al Carrito
      </Button>
      <br />
      <Link to="/">
        <Button className="ITD-button">Seguir comprando</Button>
      </Link>
    </div>
  );
};

export default ItemDetailContainer;
