import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemCount from "../item-count/itemCount";
import { useContext } from "react";
import { CartContext } from "../../Context/cartContext";

const ItemDetailContainer = () => { 
  const { products } = useProducts();
  const { id } = useParams();
  // const [inputInfo] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  // const [comments, setComments] = useState ('');
  const {addItem} = useContext (CartContext); 
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addItem({
      item : selectedItem,
      quantity,
    });
  }

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
    <div>
      <h3>Producto seleccionado</h3>
      {selectedItem && selectedItem.image}
      <p>{selectedItem && selectedItem.stock}</p>
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK: {selectedItem && selectedItem.stock}</p>
      <ItemCount stock={selectedItem?.stock} setStockSelected={setQuantity} />
      <button onClick={handleAddToCart}>
          <h4>Agregar al Carrito</h4>
        </button>
    </div>
  );
};

export default ItemDetailContainer;