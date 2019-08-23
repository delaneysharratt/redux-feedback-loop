import React, { Component } from 'react';

class Comments extends Component {
  handleClick = () => {
    this.props.history.push('/understanding');
  };

  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
        <form>
          <input type="number" />
          <button onClick={this.handleClick}>NEXT</button>
        </form>
      </div>
    );
  }
}

export default Comments;
