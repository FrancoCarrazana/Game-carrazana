import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
const Cart = () => {
  const { items, removeItem, clearItem } = useContext(CartContext);
  //  const finalPrice = items.reduce((acc, item) => acc + item.price, ((a, b) => a + b, 0));
  const finalPrice = items
    .map((item) => Number(item.price))
    .reduce((a, b) => a + b, 0);
  
    const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
    direcction: "",
  });

  const [orderId, setOrderId] = useState(null);

  const sendOrder = () => {
    const order = {
      buyer,
      items: items
     
    };
    const db = getFirestore();
    const ordersCollection = collection (db, "orders");
    const batch = writeBatch (db)
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    items.forEach(item =>{
      const itemRef = doc(db, "items", item.id);
      batch.updateDoc (itemRef, {stock: item.stock - item.quantity});
    // updateDoc (itemRef, {stock: item.stock - item.quantity});
batch.commit ();
    });
    console.log(orderId);
  };
//   const updateOrder = () => {
//     const docRef = doc(db, "items", item.id)
// updateDoc(docRef, )
//   }


  return (
    <div>
      <h2>Productos agregados al carrito:</h2>
      <h2>Precio final = {finalPrice}</h2>
      {items.length > 0 ? (
        <div>
          <ul>
            {items.map(({ item }) => (
              <li key={item.id}>
                <h4>{item.name}</h4>
                <h4> ${item.price}</h4>
                <img src={item.image} alt={item.name} />
                <p>Descripción:{item.description}</p>
                <h4>Stock del producto:{item.stock}</h4>
                <button>aumentar</button>
                <button>Disminuir</button>
                <br />
                <button onClick={removeItem}>eliminar un producto</button>
                <button onClick={clearItem}>
                  eliminar todos los productos
                </button>
                <br />
                <button>Comprar</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h3>no se encuentran productos seleccionado</h3>
          <Link to="/">
            <button>Seguir Comprando</button>
          </Link>
        </div>
      )}
      <div>
        <h5>Datos Personales</h5>
        <Form>
          <div>
            <label htmlFor="name">Nombre</label>
            <input
              value={buyer.name}
              name="name"
              onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="phone">numero telefonico</label>
            <input
              value={buyer.phone}
              name="phone"
              onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">correo electronico</label>
            <input
              value={buyer.email}
              name="email"
              onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            />
          </div>
        </Form>
        <button onClick={sendOrder}>Terminar compra</button>
        {orderId && (
          <h3>
            La order de tu compre se genero correctamente, el id de tu order es:{" "}
            {orderId}
          </h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
