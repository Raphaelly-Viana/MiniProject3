import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartList from "../Components/CartList";
import { Link } from "react-router-dom";

 function CartPage() {
  const { cart } = useContext(CartContext);

  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  return (
    <div className="container">
      <h1>Your Cart</h1>
      <CartList items={cart.items} />
      {/* <div className="cart-total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div> */}

      <Link to="/checkout">
        <button className="checkout-btn">Go to Checkout</button>
      </Link>
    </div>
  );
}

export default CartPage