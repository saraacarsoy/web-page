import React from 'react';

const Product = ({ imageSrc, price }) => {
  return (
    <div className='product'>
      <img src={imageSrc} alt="Product" />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>     
        <p>Price: ${price}</p>
        <button className='order-button'>Details</button>
      </div>

    </div>
  );
};

export default Product;
