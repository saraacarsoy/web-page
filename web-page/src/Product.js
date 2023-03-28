import React from 'react';

const Product = ({ imageSrc, price }) => {
  return (
   <div className='product'>
      <img src={require(`${imageSrc}`)} alt="Product" width='100%'/>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>     
        <p style={{ fontFamily: 'Reenie Beanie' }}>Price: ${price}</p>
        <button className='order-button'>Details</button>
      </div>

    </div>
  );
};

export default Product;
