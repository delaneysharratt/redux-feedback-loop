import React, { Component } from 'react';

class Comments extends Component {
  handleClick = () => {
    this.props.history.push('/support');
  };

  render() {
    return (
      <div>
        <h3>How well are you understanding the content?</h3>
        <form>
          <input type="number" />
          <button onClick={this.handleClick}>NEXT</button>
        </form>
      </div>
    );
  }
}

export default Comments;