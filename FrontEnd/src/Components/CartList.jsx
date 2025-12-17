import CartItem from "./CartItem";

 function CartList({ items }) {
  console.log("CART:", items);

   if (!items || items.length === 0) {
    return <p>Your cart is empty</p>;
  }

   const total = items.reduce((sum, item) => {
    if (!item.book) return sum;
  return sum + item.book.price * item.quantity;
}, 0);

  return (
   <div className="cart-container">
      <h2>Your Cart</h2>

      {items.map((item) => (
        item.book && (
          <CartItem
            key={item.book._id}
            item={item}
          />
        )
      ))}
      <h3 className="cart-total">
        Total: ${total.toFixed(2)}
      </h3>
    </div>
      
  
  );
}

export default CartList