import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends React.Component {

  state = {
    isActive: false
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  }

  render() {
    return (
      <nav className="navbar"
        aria-label="main navigation"
        style={{
          borderBottom: 'solid 1px #dddddd'
        }}>
        <div className="navbar-brand">
          <NavLink
            className="navbar-item"
            to="/"
            activeClassName="is-active">
            <span>Sibusiso Tito Zwane</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/blog"
              activeClassName="is-active"
            >
              {/* <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span> */}
              Code Blog
            </NavLink>
            <NavLink className="navbar-item"
              to="/music"
            >
            Music
            </NavLink>
            <div className="navbar-item">
                Freelance
            </div>
            <div className="navbar-item">
                Experience
            </div>
            <div className="navbar-item">
                Contact
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/pullingstrings">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/bassmental">
              <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://pullingstrings.github.io/sibusisozwane/">
              <span className="icon" style={{ color: '#0077B5', marginLeft: 5 }}>
                <i className="fab fa-lg fa-linkedin"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
