// Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            {item.name} x {item.quantity}
            <button onClick={() => removeFromCart(item.id)}>−</button>
          </div>
        ))
        
      )}
    </div>
  );
};

export default Cart;
