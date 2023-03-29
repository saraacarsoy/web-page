import React from 'react';
import Product from './Product';
import Divider from './Divider';

const ProductList = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map((product, index) => (
        <div>
          <Product key={index} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
