import React, { Component } from 'react';
import { connect } from 'react-redux';

class Understanding extends Component {
  state = {
    understanding: 0
  };

  handleRating = event => {
    this.setState({
      understanding: event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    console.log(this.state.understanding);
    if (this.state.understanding > 0) {
      this.props.dispatch({
        type: 'SET_UNDERSTANDING',
        payload: this.state.understanding
      });
      this.props.history.push('/support');
    } else {
      alert('Please provide an answer.');
    }
  };

  render() {
    return (
      <div>
        <h3>How well are you understanding the content?</h3>
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

export default connect()(Understanding);
