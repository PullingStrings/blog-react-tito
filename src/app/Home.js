import React from 'react';


const Home = () => (
  <div>
    <div className="container is-fullhd">
      <img src={require('./assets/motorbike.png')} alt='motorbike' />
    </div>
    <div className="container is-fullhd">
      <img src={require('./assets/specking.jpg')}
        style={{ width: '100%' }}
        alt='public-specking' />
    </div>
    <div className="container is-fullhd">
      <img src={require('./assets/performing.jpg')}
        style={{ width: '100%' }}
        alt='performing' />
    </div>
  </div>
);
export default Home;
