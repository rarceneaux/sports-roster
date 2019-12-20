import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    // Tell firebase we are logging-in
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
<div className="Auth">
      <button onClick={this.loginClickEvent} className="btn btn-secondary"> LOG <span role="img" aria-label="football">🏈</span>IN</button>
</div>
    );
  }
}

export default Auth;
