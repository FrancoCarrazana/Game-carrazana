import React, { useContext } from 'react'
import { CartContext } from '../../Context/cartContext';

const Cart = () => {
 const { items }= useContext(CartContext);
 console.log ({items});
  return (
    <div>
      <h1>Productos agregados en el carrito</h1>
       {items.map(({item}) => (
         <div>
           <h3>{item.name}</h3>
           <h2>{item.price}</h2>
           <h2>{item.image}</h2>
           <h2>{item.description}</h2>
           <h2>{item.stock}</h2>
         </div>
         
         
       ))}
        </div>
  )
}

export default Cart