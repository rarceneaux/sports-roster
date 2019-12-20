import React from 'react';
import './App.scss';

// import firebase
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connections';

// call connection before 
firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  // we won't use this method very often 
  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <h1>Game Time</h1>
      </div>
    );
  }
}

export default App;
