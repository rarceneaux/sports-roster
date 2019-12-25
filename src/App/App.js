import React from 'react';
import './App.scss';

// import firebase
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connections';
import Auth from '../components/Auth/Auth';
import NavBar from '../components/NavBar/NavBar';
import Team from '../components/Team/Team';


// call connection before
firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      console.log('user', user);

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
    const { authed } = this.state;

    return (
      <div className="App">
        <NavBar authed={authed}/>
        {/* if they are logged in show team */}
        {/* if not show log-in btn */}
        {
          // Team Container below
        (authed) ? (<Team />) : (<Auth/>)
        }
      </div>
    );
  }
}

export default App;
