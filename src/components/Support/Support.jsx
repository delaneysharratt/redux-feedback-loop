import React, { Component } from 'react';

class Start extends Component {
  handleClick = () => {
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <h3>How well are you being supported?</h3>
        <form>
          <input type="number" />
          <button onClick={this.handleClick}>NEXT</button>
        </form>
      </div>
    );
  }
}

export default Start;
