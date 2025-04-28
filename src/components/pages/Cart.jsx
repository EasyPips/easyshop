import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import del from '../../assets/icon-delete.svg'

function CartPage() {
  const { cart, reduceQuantity, addToCart, removeFromCart, totalPrice } = useContext(CartContext);

  return (
    <div className="pt-30 min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white shadow-sm rounded-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex flex-col flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>

                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => reduceQuantity(item.id)}
                      className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-3 rounded-l"
                    >
                      -
                    </button>
                    <span className="text-l font-bold px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-1 px-3 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-gray-900 bg-gray-800"
                >
                  <img src={del} alt="" />
                </button>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="flex justify-between mb-4">
              <span>Total Items:</span>
              <span>{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(1)}</span>
            </div>

            <button
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 rounded-lg mt-8"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
