import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/cartContext';

const Cart = () => {
 const { items, removeItem, clearItem , moreItem, lessItem } = useContext(CartContext);
//  const finalPrice = items.reduce((acc, item) => acc + item.price, ((a, b) => a + b, 0));
 const finalPrice =  items.map((item) => Number(item.price)) .reduce((a, b) => a + b, 0);

return (
  <div>
      <h2>Productos agregados al carrito:</h2>
      <h2>Precio final = {finalPrice}</h2>
      {items.length > 0 ? (
        <div >
          <ul>
            {items.map(({item}) => (
              <li key={item.id}> 
                <h4>{item.name}</h4>
                <h4> ${item.price}</h4>
                <span>{item.image}</span>
                <p>Descripción:{item.description}</p>
                <h4>Stock del producto:{item.stock}</h4> 
                <button onClick={moreItem}>aumentar</button>
                <button onclick={lessItem}>Disminuir</button>
                <br/>
                <button onClick={removeItem}>eliminar un producto</button>
                <button onClick={clearItem}>eliminar todos los productos</button>
                <br/>
                <button>Comprar</button>
              </li>
                 ))}
                 
          </ul>
          </div>) 
          : 
          (
          <div >
            <h3>no se encuentran productos seleccionado</h3>
            <Link to='/'><button>Seguir Comprando</button></Link>
          </div>
          )
      }
  </div>
);
};

export default Cart;