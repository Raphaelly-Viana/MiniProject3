import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const items = cart.items || [];

  const total = items.reduce((sum, item) => {
    if (!item.book) return sum;
    return sum + item.book.price * item.quantity;
  }, 0);

  const handleConfirm = () => {
    alert("Purchase confirmed! Thank you 🎉");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Checkout</h1>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {items.map((item) =>
              item.book ? (
                <li key={item.book._id}>
                  {item.book.title} — ${item.book.price} x {item.quantity}
                </li>
              ) : null
            )}
          </ul>

          <h3>Total: ${total.toFixed(2)}</h3>

          <button onClick={handleConfirm}>
            Confirm Purchase
          </button>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;