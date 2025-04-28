import Products from './Products'
import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const products = Products;

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <strong>{product.name}</strong> - ${product.price}
          <button onClick={() => addToCart(product)} style={{ marginLeft: '10px' }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
