import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {
  state = {
    comments: ''
  };

  handleChange = event => {
    this.setState({
      comments: event.target.value
    });
  };

  handlePrevious = () => {
    this.props.history.push('/support');
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.comments);
    this.props.dispatch({
      type: 'SET_COMMENTS',
      payload: this.state.comments
    });
    this.props.history.push('/review');
  };

  render() {
    return (
      <div>
        <h3>Any comments you want to leave?</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handlePrevious}>BACK</button>
          <button type="submit">NEXT</button>
        </form>
      </div>
    );
  }
}

export default connect()(Comments);
