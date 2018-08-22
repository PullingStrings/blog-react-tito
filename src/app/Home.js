import React from 'react';
import MotorImg from './assets/motorbike.png';
import SpeakerImg from './assets/specking.jpg';
import PerformImg from './assets/performing.jpg';

const divStyleOne = {
  backgroundColor: '#ffffff00',
  position: 'static',
  height: '100%',
  width: 'auto',
  backgroundSize: 'cover'
};


const Home = () => (
  <div>
    <div className="container is-fullhd"
      style={{height: '100vh'}}>
      <div className="columns"
        style={{height: '100vh'}}>
        <div className="column"
          style={{backgroundColor: '#ffffff00',
            position: 'static',
            height: '100%',
            width: 'auto',
            backgroundImage: `url(${MotorImg})`
          }}>
          <h1>This is the 1st Div</h1>
        </div>
        <div className="column"
          style={{backgroundColor: '#0000008a',
            position: 'absolute',
            height: '100%',
            width: '50%',
            left: '50%'
          }}>
          <h2>This is the 2nd div</h2>
        </div>
      </div>
    </div>
    <div className="container is-fullhd"
      style={{height: '100vh'}}>
      <div className="columns"
        style={{height: '100vh'}}>
        <div className="column"
          style={{backgroundColor: '#ffffff00',
            position: 'static',
            height: '100%',
            width: 'auto',
            backgroundImage: `url(${SpeakerImg})`,
            backgroundSize: 'cover'
          }}>
          <h1>This is the 3st Div</h1>
        </div>
        <div className="column"
          style={{backgroundColor: '#0000008a',
            position: 'absolute',
            height: '100%',
            width: '50%',
            left: '50%'
          }}>
          <h2>This is the 4nd div</h2>
        </div>
      </div>
    </div>
    <div className="container is-fullhd"
      style={{height: '100vh'}}>
      <div className="columns"
        style={{height: '100vh'}}>
        <div className="column"
          style={{backgroundColor: '#ffffff00',
            position: 'static',
            height: '100%',
            width: 'auto',
            backgroundImage: `url(${PerformImg})`,
            backgroundSize: 'cover'
          }}>
          <h1>This is the 5st Div</h1>
        </div>
        {/* <div className="column"
          style={{backgroundColor: '#0000008a',
            position: 'absolute',
            height: '100%',
            width: '50%',
            left: '50%'
          }}>
          <h2>This is the 6nd div</h2>
        </div> */}
      </div>
    </div>
  </div>
);
export default Home;
