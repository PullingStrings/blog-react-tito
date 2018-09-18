import React from 'react';
// import MotorImg from './assets/motorbike.png';
// import SpeakerImg from './assets/specking.jpg';
// import PerformImg from './assets/performing.jpg';
import Typing from 'react-typing-animation';

// const colOne = {
//   backgroundSize: 'cover',
//   height: '100%',
//   backgroundImage: `url(${SpeakerImg})`
// };

const headerType = {
  fontSize: '60px'
};

const Home = () => (
  <div>
    <div className="container is-fullhd">
      <div className="columns">
        <div className="column" >
          <Typing speed={100}>
            <div style={headerType}>
              <h1>Web developer</h1>
              <h1>Art Lover</h1>
              <h1>Music Player</h1>
              <h1>Blogger...</h1>
            </div>
          </Typing>
          <p className="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7">Sibusiso Zwane.</p>
          <p className="mbr-author-desc mbr-fonts-style display-7">Web Developer<br/>
            <a href="https://github.com/PullingStrings" className="text-danger">https://github.com/PullingStrings</a><br/><a href="https://www.linkedin.com/in/titozwane/" className="text-secondary">https://www.linkedin.com/in/titozwane/</a><br/><a href="mailto:titozwane28@gmail.com" className="text-success">titozwane28@gmail.com</a></p>
        </div>
        <div className="column">
          <figure  className="image">
            <img src={require('./assets/profile-picture-600x450.png')} alt="sitting down" />
          </figure>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
