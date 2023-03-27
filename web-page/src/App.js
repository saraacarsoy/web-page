import React from 'react';
import ProductList from './ProductList';

const products = [
  { imageSrc: './product-images/dino1.png', price: 19.99 },
  { imageSrc: './product-images/rat1.png', price: 29.99 },
  { imageSrc: './product-images/dino2.png', price: 39.99 },
  { imageSrc: './product-images/rat2.png', price: 49.99 },
  { imageSrc: './product-images/dino1.png', price: 59.99 },
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
