import React from "react";
import { Form } from "react-bootstrap";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
function cartForm() {
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
  return (
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
  );
}

export default cartForm;
