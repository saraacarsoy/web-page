import React from 'react';
import Divider from './Divider';

const Product = ({ product }) => {
  return (
   <div className='product'>
      <img src={require(`${product.imageSrc}`)} alt='Product' className='product__image'/>
      <div className='product__details'>     
        <span className='product__text'>Price: {product.price} kr</span>
      </div>
      <Divider product={product}></Divider>
    </div>
  );
};

export default Product;
