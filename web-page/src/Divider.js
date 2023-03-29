import React from 'react';

const Divider = ({ product }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div className='divider__arrow'></div>
            <div className='divider'>
                <img src={require(`${product.imageSrc}`)} alt='Product' className='divider__image'/>

                <div style={{ display: 'flex', flexDirection: 'column', padding: '5rem 0', alignContent: 'center' }}>
                    <select className='divider__dropdown'>
                        <option></option>
                        <option></option>
                    </select>

                    <span>Price:  kr</span>
                </div>
            </div>
        </div>
    );
};

export default Divider;