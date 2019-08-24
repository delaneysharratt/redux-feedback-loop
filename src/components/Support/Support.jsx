import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: 0
  };

  handleRating = event => {
    this.setState({
      support: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    console.log(this.state.support);
    this.props.dispatch({
      type: 'SET_SUPPORT',
      payload: this.state.support
    });
    this.props.history.push('/comments');
  };

  render() {
    return (
      <div>
        <h3>How well are you being supported?</h3>
        <form onSubmit={this.handleClick}>
          <input
            type="radio"
            name="rating"
            value="1"
            onClick={this.handleRating}
          />
          1
          <input
            type="radio"
            name="rating"
            value="2"
            onClick={this.handleRating}
          />
          2
          <input
            type="radio"
            name="rating"
            value="3"
            onClick={this.handleRating}
          />
          3
          <input
            type="radio"
            name="rating"
            value="4"
            onClick={this.handleRating}
          />
          4
          <input
            type="radio"
            name="rating"
            value="5"
            onClick={this.handleRating}
          />
          5
          <br />
          <button type="submit">NEXT</button>
        </form>
      </div>
    );
  }
}

export default connect()(Support);
