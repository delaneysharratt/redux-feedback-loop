import React, { Component } from 'react';

class Start extends Component {
  handleClick = () => {
    this.props.history.push('/submit');
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <br />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Start;
