import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

import authData from '../../helpers/data/authData';

import playerData from '../../helpers/data/playerData';

import './Team.scss';

class Team extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayersByUid(authData.getCoachUid())
      .then((players) => {
        this.setState({ players });
      })
      .catch((errFromTeam) => console.error({ errFromTeam }));
  }

  render() {
    return (
      <div className="myCards">
    <div className="col-3">{this.state.players.map((player) => (<PlayerCard player={player}/>))}
    </div>
    </div>);
  }
}

export default Team;
