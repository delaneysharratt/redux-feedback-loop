import React, { Component } from 'react';

class Start extends Component {
  handleClick = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Thank you!</h2>
        <br />
        <button onClick={this.handleClick}>Leave New Feedback</button>
      </div>
    );
  }
}

export default Start;
