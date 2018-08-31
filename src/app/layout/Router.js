import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../Home';
import Blog from './../Blog';
// import Music from './../Music';
import BlogPost from './../BlogPost';
// import MusicPost from './../MusicPost';


const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/blog' component={Blog}/>
    {/* <Route exact path='/music' component={Music}/> */}
    <Route path='/blog/:blogPost' component={BlogPost}/>
    {/* <Route path='/blog/:musicPost' component={MusicPost}/> */}
  </Switch>
);


export default Router;
