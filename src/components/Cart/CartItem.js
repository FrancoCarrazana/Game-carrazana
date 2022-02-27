import React from 'react'
export const CartItem = ({item, remove}) => {

    return (
        <div key={item.item.id}>
            <div >
                <img src={item.item.img} alt={item.item.title}/>
                <div>
                    
                    <p >{item.item.title}</p>
                    <p >Cantidad: {item.item.quantity}</p>
                </div>
            </div>
            <p >Precio: ${(item.item.price * item.item.quantity).toFixed(2)}</p>
            <button onClick={()=> remove(item.item.id)}></button>
        </div>
    )
}