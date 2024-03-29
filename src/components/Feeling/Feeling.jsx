import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    feeling: 0
  };

  handleRating = event => {
    this.setState({
      feeling: event.target.value
    });
  };

  handlePrevious = () => {
    this.props.history.push('/');
  };

  handleClick = event => {
    event.preventDefault();
    console.log('Feeling:', this.state.feeling);
    if (this.state.feeling > 0) {
      this.props.dispatch({
        type: 'SET_FEELING',
        payload: this.state.feeling
      });
      this.props.history.push('/understanding');
    } else {
      alert('Please provide an answer.');
    }
  };

  render() {
    return (
      <div>
        <h3>How are you feeling today?</h3>
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
          <button onClick={this.handlePrevious}>BACK</button>
          <button type="submit">NEXT</button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
