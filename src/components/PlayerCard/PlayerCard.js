import React from 'react';

import './PlayerCard.scss';

import playerShape from '../../helpers/propz/playerShape';

class PlayerCard extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="playerCard">
  <div className="card-body text-center">
  <h1 className="card-title">{player.name}</h1>
  <img src={player.imageUrl} className="card-img-top" alt="..."/>
  <h2 className="card-text">Position: {player.position}</h2>
  <button className="btn btn-secondary">Trade</button>
  <button className="btn btn-secondary">Update</button>


  </div>
</div>
    );
  }
}

export default PlayerCard;
