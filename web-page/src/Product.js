import React from 'react';
import Divider from './Divider';

const Product = ({ product }) => {
  const [showDetails, toggleDetails] = React.useState(false)
  const onClick = () => toggleDetails(!showDetails)

  return (
    <>
    <div className='product'>
      <img src={require(`${product.imageSrc}`)} alt='Product' className='product__image'/>
      <div className='product__details'>     
        <span className='product__text'>Price: {product.price} kr</span>
        <button className='order-button' onClick={onClick}></button>
      </div>
    </div>
    { showDetails ? <Divider product={product}></Divider> : null }
    </>
  );
};

export default Product;
