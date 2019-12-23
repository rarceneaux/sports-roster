import React from 'react';
import PropTypes from 'prop-types';
import './PlayerCard.scss';

import playerShape from '../../helpers/propz/playerShape';

class PlayerCard extends React.Component {
  static propTypes = {
    player: PropTypes.arrayOf(playerShape.playerShape),
    deleteAPlayer: PropTypes.func,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, deleteAPlayer } = this.props;
    deleteAPlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="playerCard">
        <div className="card-body text-center">
        <h1 className="card-title">{player.name}</h1>
        <img src={player.imageUrl} className="card-img-top" alt="..."/>
        <h2 className="card-text">Position: {player.position}</h2>
        <button onClick={this.deletePlayerEvent} className="btn btn-danger">Trade</button>
        <button className="btn btn-primary">Update</button>
  </div>
</div>
    );
  }
}

export default PlayerCard;
