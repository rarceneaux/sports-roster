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
    editMode: false,
    playerToEdit: {},

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

updatePlayer = (playerId, updatePlayer) => {
  playerData.updatePlayer(playerId, updatePlayer)
    .then(() => {
      this.getPlayers();
      this.setState({ editMode: false, showPlayerForm: false });
    })
    .catch((errorFromUpdatedPlayer) => console.error({ errorFromUpdatedPlayer }));
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

 setEditMode = (editMode) => {
   this.setState({ editMode, showPlayerForm: true });
 }

 setPlayerToEdit = (player) => {
   this.setState({ playerToEdit: player });
 }
 
 render() {
   return (<div className="d-flex flex-wrap">
   <div> <button onClick={this.setShowPlayerForm} className="btn btn-secondary"> Add Player</button></div>
        {this.state.showPlayerForm && <PlayerForm addPlayer={this.addPlayer} editMode={this.state.editMode} playerToEdit={this.state.playerToEdit} updatePlayer={this.updatePlayer}/>}
        {this.state.players.map((player) => (<PlayerCard key={player.id} player={player} deleteAPlayer={this.deleteAPlayer} playerForm={this.playerForm} setEditMode={this.setEditMode} setPlayerToEdit={this.setPlayerToEdit}/>))}
    </div>);
 }
}

export default Team;
