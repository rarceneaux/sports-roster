import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

class NavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool,
  }

logMeOut = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
}

render() {
  const { authed } = this.props;

  return (
      <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" href="#">QB₁</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          </ul>
          <div className="form-inline my-2 my-lg-0">
            {/* if auth is true show btn to log out if not true show nothing */}
            { authed ? (<button className="btn btn-secondary" onClick={this.logMeOut}>GAME<span role="img" aria-label="football"> 🏈</span>OVER</button>)
              : ('')
            }
            </div>
            </div>
            </nav>
            </div>
  );
}
}

export default NavBar;
