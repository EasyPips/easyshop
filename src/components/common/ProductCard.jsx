import Products from "../Products";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

let product = Products;

const ProductCard = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="flex flex-wrap gap-8 justify-center py-8">
      {product.map((p) => (
        <div
          key={p.id}
          className="w-full max-w-xs bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
        >
          <img
            className="w-full h-56 object-cover"
            src={p.image}
            alt={p.name}
          />

          <div className="flex flex-col p-4 flex-grow">
            <h2 className="text-lg font-bold mb-2 text-gray-800">{p.name}</h2>

            <p className="text-sm text-gray-600 mb-2">
              {p.category}
            </p>

            <p className="text-sm text-gray-500 mb-4 line-clamp-3">
              {p.description}
            </p>

            <div className="mt-auto flex items-center justify-between">
              <p className="text-xl font-semibold text-gray-800">${p.price}</p>
              <button
                onClick={() => addToCart(p)}
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold py-2 px-4 rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
