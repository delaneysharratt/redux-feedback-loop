import React, { Component } from 'react';

class Start extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.history.push('/feeling')}>
          START
        </button>
      </div>
    );
  }
}

export default Start;
