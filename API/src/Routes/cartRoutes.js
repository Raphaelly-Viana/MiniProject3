const express = require("express");
const Cart = require("../Models/cartModel");
const router = express.Router();

// Add to cart
router.post("/add", async (req, res) => {
  try {
    const { bookId } = req.body;

    let cart = await Cart.findOne();
    if (!cart) cart = new Cart({ items: [] });

    const existingItem = cart.items.find((item) => {
  if (!item.book) return false;

  return item.book.toString() === bookId ||
         item.book._id?.toString() === bookId;
});
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ book: bookId, quantity: 1 });
    }

    await cart.save();
    await cart.populate("items.book");

    res.json(cart);
  } catch (err) {
    console.error("ADD TO CART ERROR:", err);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

// Remove from cart
router.post("/remove", async (req, res) => {
  try {
    const { bookId } = req.body;

    let cart = await Cart.findOne();
    if (!cart) return res.json({ items: [] });

    cart.items = cart.items.filter(
      (item) =>
        item.book._id?.toString() !== bookId &&
        item.book.toString() !== bookId
    );

    await cart.save();
    await cart.populate("items.book");

    res.json(cart);
  } catch (err) {
    console.error("REMOVE FROM CART ERROR:", err);
    res.status(500).json({ error: "Failed to remove item" });
  }
});

// Get cart
router.get("/", async (req, res) => {
  const cart = await Cart.findOne().populate("items.book");
  res.json(cart || { items: [] });
});

module.exports = router;