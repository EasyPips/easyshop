import Products from "../Products";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";


let product = Products;

const ProductCard = () => {
    const {addToCart} = useContext(CartContext)
    return (
      <div className="flex flex-wrap gap-4 -mb-4">
        {product.map((p) => (
          <div
            key={p.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm p-4 "
          >
            <h2 className="text-2xl font-medium mb-2 text-center">{p.name}</h2>
            <img
              className="p-1 rounded-t-lg w-full h-40 object-cover"
              src={p.image}
              alt={p.name}
            />
            <p className="text-xl font-semibold tracking-tight text-gray-800 mt-2">
              Category: {p.category}
            </p>
            <div className="flex items-center justify-between mt-4">
              <p className="text-3xl font-bold text-gray-800">${p.price}</p>
              <button
                onClick={() => addToCart(p)}
                className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}
 
export default ProductCard;