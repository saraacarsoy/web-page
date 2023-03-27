import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map((product, index) => (
        <Product key={index} imageSrc={product.imageSrc} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
