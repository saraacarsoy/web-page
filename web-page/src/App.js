import React from 'react';
import './less/App.less';
import Overview from './Overview';

const App = () => {
  return (
    <div className='page'>
      <div className='page__header'>
        <img src={require('./icon.png')} alt='Icon' className='page__header-image'></img>
        <span className='page__header-title'>shirotriestocrochet</span>
      </div>
      <Overview/>
      <span className='page__header-title'>*It is possible that there will be differences from product to product. Mom says: "Handcrafted goods cannot be free from flaws."</span>
    </div>
  );
};

export default App;
