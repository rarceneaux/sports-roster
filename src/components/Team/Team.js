import React from 'react';
// import PropTypes from 'prop-types';
import PlayerCard from '../PlayerCard/PlayerCard';

import authData from '../../helpers/data/authData';


import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
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

 deleteAPlayer = (playerId) => {
   playerData.deletePlayer(playerId)
     .then(() => {
       this.getPlayers();
     })
     .catch((errorFromDeletePlayer) => console.error({ errorFromDeletePlayer }));
 }

 render() {
   return (
      <div className="myCards text-center">
        <button className="btn btn-success"> Add Player</button>
    <div className="d-flex flex-wrap">{this.state.players.map((player) => (<PlayerCard key={player.id} player={player} deleteAPlayer={this.deleteAPlayer}/>))}
    </div>
    </div>);
 }
}

export default Team;
