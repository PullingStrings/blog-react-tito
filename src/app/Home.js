import React from 'react';
import MotorImg from './assets/motorbike.png';
// import SpeakerImg from './assets/specking.jpg';
// import PerformImg from './assets/performing.jpg';

const divStyleOne = {
  color: 'white',
  padding: '20px 20px',
  backgroundColor: '#0000007a',
  textAlign: 'center'
};

const divStyleTwo = {
  backgroundColor: '#ffffff00',
  position: 'relative',
  left: '50%',
  right: '0rem'
};


const Home = () => (
  <div>
    <div className="container is-fullhd"
      style={{
        backgroundImage: `url(${MotorImg})`


      }}>
      <div className="columns"
        style={{}}>
        <div className="column"
          style={divStyleTwo}>

        </div>
        <div className="column"
          style={divStyleOne}>
          <p className="mbr-text testimonial-text mbr-fonts-style display-7">I’ve worked in the performing-arts sector over the years, from social media monitoring, coordinating live music events and curating visual art exhibitions in Southern and Eastern Africa mostly.<br/><br/>Travelling between countries and continents, I often used my laptop to create personal sites for musicians and artists. To create these portfolios, I was using website builders.<br/><br/>They were expensive to maintain and limited regarding the scale of creativity and customisation for myself and ultimately the client. This is why, I decided that I would like to build my own website from start to finish.<br/><br/>Due to the limited resources and technologies back home in South Africa, I then moved to London and joined GA. I fully immersed myself in the web development community to unlock my potential in the digital sphere.<br/><br/>After discovering the various paths in web development, I learn and admire the fact that you can work in teams as a developer (like joining a band again). Getting my feet wet in front-end development is where I would like to start my journey with the possibility to later on jump back into back-end development to become a well rounded full-stack developer.<br/></p>
          <p className="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7">Sibusiso Zwane.</p>
          <p className="mbr-author-desc mbr-fonts-style display-7">Web Developer<br/>
            <br/>
            <a href="https://github.com/PullingStrings" className="text-danger">https://github.com/PullingStrings</a><br/><a href="https://www.linkedin.com/in/titozwane/" className="text-secondary">https://www.linkedin.com/in/titozwane/</a><br/><a href="mailto:titozwane28@gmail.com" className="text-success">titozwane28@gmail.com</a><br/><br/><br/></p>
        </div>
      </div>
    </div>

  </div>
);
export default Home;
