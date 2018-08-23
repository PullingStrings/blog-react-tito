import React from 'react';

const styleFooter = {
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  padding: '1rem'
};

const Footer = () => (
  <footer className="footer" style={styleFooter}>
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Built on <strong>React</strong> with <strong>Bulma</strong> by Me! <a href="https://github.com/pullingstrings">Tito Zwane</a>
          <br />
          Copyright 2018
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
