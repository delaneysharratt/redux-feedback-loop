import React, { Component } from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';

class Start extends Component {
  state = {
    feedback: {
      feelings: 0,
      understanding: 0,
      support: 0,
      comments: ''
    }
  };

  componentDidMount() {
    this.setFeedback();
  }

  setFeedback = () => {
    this.setState({
      feedback: {
        feelings: this.props.feeling,
        understanding: this.props.understanding,
        support: this.props.support,
        comments: this.props.comments
      }
    });
  };

  handleClick = () => {
    this.props.history.push('/submit');
  };

  render() {
    return (
      <div>
        <h2>Review Your Feedback</h2>
        <br />
        <div>
          <h3>Feelings: {this.state.feedback.feelings}</h3>
          <h3>Understanding: {this.state.feedback.understanding}</h3>
          <h3>Support: {this.state.feedback.support}</h3>
          <h3>Comments: {this.state.feedback.comments}</h3>
        </div>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = reduxStore => {
  return {
    feeling: reduxStore.feelingReducer,
    understanding: reduxStore.understandingReducer,
    support: reduxStore.supportReducer,
    comments: reduxStore.commentReducer
  };
};

export default connect(mapStateToProps)(Start);
