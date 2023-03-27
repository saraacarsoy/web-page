import React from 'react';
import ProductList from './ProductList';

const products = [
  { imageSrc: 'product1.jpg', price: 19.99 },
  { imageSrc: 'product2.jpg', price: 29.99 },
  { imageSrc: 'product3.jpg', price: 39.99 },
  { imageSrc: 'product3.jpg', price: 49.99 },
  { imageSrc: 'product3.jpg', price: 59.99 },
];

const App = () => {
  return (
    <div className='overview'>
      <h1>Products</h1>
      <ProductList products={products} />
    </div>
    
  );
};

export default App;
