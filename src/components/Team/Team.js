import React from 'react';
// import PropTypes from 'prop-types';
import PlayerCard from '../PlayerCard/PlayerCard';
import authData from '../../helpers/data/authData';
import PlayerForm from '../PlayerForm/PlayerForm';

import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
    showPlayerForm: false,
  }

  componentDidMount() {
    this.getPlayers();
  }

getPlayers = () => {
  playerData.getPlayersByUid(authData.getCoachUid())
    .then((players) => {
      this.setState({ players });
    })
    .catch((errFromTeam) => console.error({ errFromTeam }));
}

addPlayer = (newPlayer) => {
  playerData.addPlayer(newPlayer)
    .then(() => {
      this.getPlayers();
      this.setState({ showPlayerForm: false });
    })
    .catch((errorFromSaveNewPlayer) => console.error({ errorFromSaveNewPlayer }));
}

 deleteAPlayer = (playerId) => {
   playerData.deletePlayer(playerId)
     .then(() => {
       this.getPlayers();
     })
     .catch((errorFromDeletePlayer) => console.error({ errorFromDeletePlayer }));
 }

 setShowPlayerForm = () => {
   this.setState({ showPlayerForm: true });
 }

 render() {
   return (<div className="d-flex flex-wrap">
   <div> <button onClick={this.setShowPlayerForm} className="btn btn-secondary"> Add Player</button></div>
        {this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer}/>}
        {this.state.players.map((player) => (<PlayerCard key={player.id} player={player} deleteAPlayer={this.deleteAPlayer} playerForm={this.playerForm}/>))}
    </div>);
 }
}

export default Team;
