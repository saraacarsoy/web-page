import React from 'react';

const Product = ({ imageSrc, price }) => {
  return (
   <div className='product'>
      <img src={require(`${imageSrc}`)} alt='Product' className='product__image'/>
      <div className='product__details'>     
        <span className='product__text'>Price: {price} kr</span>
        <button className='order-button'>Details</button>
      </div>

    </div>
  );
};

export default Product;
