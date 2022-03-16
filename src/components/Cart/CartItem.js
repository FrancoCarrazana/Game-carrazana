import React, { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import "./Cart.css";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  // updateDoc,
  writeBatch,
} from "firebase/firestore";

const CartItem = () => {
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
      items: items,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    const batch = writeBatch(db);
    addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    items.forEach((item) => {
      const itemRef = doc(db, "items", item.id);
      batch.updateDoc(itemRef, { stock: item.stock - item.quantity });
      // updateDoc (itemRef, {stock: item.stock - item.quantity});
      batch.commit();
    });
    console.log(orderId);
  };
  //   const updateOrder = () => {
  //     const docRef = doc(db, "items", item.id)
  // updateDoc(docRef, )
  //   }

  return (
    <div className="c1">
      <h2>Productos agregados al carrito:</h2>
      <h2>Precio final = {finalPrice}</h2>
      {items.length > 0 ? (
        <div>
          <ul>
            {items.map(({ item }) => (
              <li key={item.id}>
                <h3>
                  <b>{item.name}</b>
                </h3>
                <h4> ${item.price}</h4>
                <img className="c-img" src={item.image} alt={item.name} />
                <p>Descripción:{item.description}</p>
                <h4>Stock del producto:{item.stock}</h4>
                <Button className="c-button">aumentar</Button>
                <Button className="c-button">Disminuir</Button>
                <br />
                <Button className="c-button" onClick={removeItem}>
                  eliminar un producto
                </Button>
                <Button className="c-button" onClick={clearItem}>
                  eliminar todos los productos
                </Button>
                <br />
                {/* <Link to="/form"> */}
                <Button className="c-button">Comprar</Button>
                {/* </Link> */}
              </li>
            ))}
          </ul>
          <div>
            <h5>Datos Personales</h5>
            <Form className="c-form">
              <div>
                <label htmlFor="name">
                  <b>Nombre:</b>
                </label>
                <input
                  className="form-control"
                  placeHolder="Ingresar Nombre Completo"
                  value={buyer.name}
                  name="name"
                  onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">
                  <b>Numero Telefonico:</b>
                </label>
                <input
                  className="form-control"
                  placeHolder="Ingresar Numero Telefonico"
                  value={buyer.phone}
                  name="phone"
                  onChange={(e) =>
                    setBuyer({ ...buyer, phone: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label htmlFor="email">
                  <b>Correo Electronico:</b>
                </label>
                <input
                  className="form-control"
                  placeHolder="Ingresar Correo Electronico"
                  value={buyer.email}
                  name="email"
                  onChange={(e) =>
                    setBuyer({ ...buyer, email: e.target.value })
                  }
                  required
                />
              </div>
            </Form>
            <Button className="c-button" onClick={sendOrder}>
              Terminar compra
            </Button>
            {orderId && (
              <div className="orderFinaly">
                <h3>
                  La order de tu compre se genero correctamente, el id de tu
                  order es: {orderId}
                </h3>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <h3>no se encuentran productos seleccionado</h3>
          <Link to="/">
            <Button className="c-button">Seguir Comprando</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItem;
