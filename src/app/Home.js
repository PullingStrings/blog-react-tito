import React from 'react';
import styled from 'styled-components';

const divOne = styled.div`
  background-color: #000;
  position: relative;
  z-index: 1;
`;

console.log(divOne);

const divTwo = `
  background-color: blue;
  position: absolute;
  z-index: auto;
`;

const Home = () => (
  <div>
    <div className="columns">
      <div className="column"
        style={{ divOne }}>
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
      <div className="column"
        style={{ divTwo }}>
        div 2
      </div>
    </div>

  </div>
);
export default Home;
