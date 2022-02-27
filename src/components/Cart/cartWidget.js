import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/cartContext"


const CartWidget = () => {
    const {cart, totalCart} = useContext(CartContext)
  return (
      <Link to="/cart">            
            <span>{Number(cart.reduce((acc, el) => acc + el.quantity, 0))}</span>

            <p>${totalCart().toFixed(2)}</p>
      </Link>
  )
}

export default CartWidget;