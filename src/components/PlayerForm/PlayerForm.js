import React from 'react';
import PropTypes from 'prop-types';
import authData from '../../helpers/data/authData';
import playerShape from '../../helpers/propz/playerShape';

import './PlayerForm.scss';

class AddPlayerForm extends React.Component {
  static propTypes = {
    addPlayer: PropTypes.func,
    playerToEdit: playerShape.playerShape,
    editMode: PropTypes.bool,
    updatePlayer: PropTypes.func,
  }

state = {
  imageUrl: '',
  name: '',
  position: '',
}

componentDidMount() {
  const { playerToEdit, editMode } = this.props;
  if (editMode) {
    this.setState({ imageUrl: playerToEdit.imageUrl, name: playerToEdit.name, position: playerToEdit.position });
  }
}

savePlayerEvent = (e) => {
  const { addPlayer } = this.props;

  e.preventDefault();
  const newPlayer = {
    imageUrl: this.state.imageUrl,
    name: this.state.name,
    position: this.state.position,
    uid: authData.getCoachUid(),
  };
  addPlayer(newPlayer);
  this.setState({ imageUrl: '', name: '', position: '' });
}

updatePlayerEvent = (e) => {
  e.preventDefault();
  const { updatePlayer, playerToEdit } = this.props;
  const updatedPlayer = {
    imageUrl: this.state.imageUrl,
    name: this.state.name,
    position: this.state.position,
    uid: playerToEdit.uid,
  };
  updatePlayer(playerToEdit.id, updatedPlayer);
}

nameChange = (e) => {
  e.preventDefault();
  this.setState({ name: e.target.value });
}

positionChange = (e) => {
  e.preventDefault();
  this.setState({ position: e.target.value });
}

imgChange = (e) => {
  e.preventDefault();
  this.setState({ imageUrl: e.target.value });
}

render() {
  const { editMode } = this.props;

  return (
      <form className='col-6 offset-3 PlayerForm'>
      <div className="form-group">
        <label htmlFor="order-name">Player Name:</label>
        <input
          type="text"
          className="form-control"
          id="player-name"
          placeholder="Enter player name"
          value={this.state.name}
          onChange={this.nameChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description-name">Position:</label>
        <input
          type="text"
          className="form-control"
          id="player-position"
          placeholder="Enter player position"
          value={this.state.position}
          onChange={this.positionChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description-name">Player Picture:</label>
        <input
          type="text"
          className="form-control"
          id="player-img"
          placeholder="Enter Picture"
          value={this.state.imageUrl}
          onChange={this.imgChange}
        />
      </div>
      {
        // addupdateBoardEvent here
        (editMode) ? (<button className="btn btn-warning" onClick={this.updatePlayerEvent}>Update Player</button>)
          : (<button className="btn btn-secondary" onClick={this.savePlayerEvent}>Save Player</button>
          )
      }
    </form>
  );
}
}

export default AddPlayerForm;
