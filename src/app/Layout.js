import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
// import { Router } from 'react-router-dom';

import Router from './layout/Router';
import Site from './layout/Site';
import Header from './layout/Header';
import Content from './layout/Content';
import Footer from './layout/Footer';

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="Tito is Awesome"
      meta={[
        { name: 'description', content: 'Tito\'s personal wedsite, portfolio, blog, tutorials, and just cool $h!t' },
        { name: 'keywords', content: 'resume, blog, porfolio, tutorials, tito zwane' },
        {name: 'mobile-web-app-capable', content: 'yes'},
        {name: 'apple-mobile-web-app-capable', content: 'yes'}
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'}
      ]}
      link={[
        {'rel': 'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
        {'rel': 'manifest', 'href': '../../manifest.json'}
      ]}
    />
    <Header />
    <Content>
      {children}
      <Router />
    </Content>
    <Footer />
  </Site>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
