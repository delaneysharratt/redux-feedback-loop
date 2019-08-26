import React, { Component } from 'react';
import axios from 'axios';
import './Admin.css';

class Start extends Component {
  state = {
    feedbackEntries: []
  };

  componentDidMount() {
    this.getFeedback();
  }

  getFeedback = () => {
    axios
      .get('/feedback')
      .then(response => {
        console.log(response.data);
        this.setState({ feedbackEntries: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  deleteSubmission = id => {
    axios
      .delete(`/feedback/${id}`)
      .then(response => {
        console.log('Deleted submission:', response.data);
        this.getFeedback();
      })
      .catch(error => {
        console.log(error);
      });
  };

  createSubmissionList = () => {
    let feedbackEntry = this.state.feedbackEntries.map(feedback => {
      return (
        <tr key={feedback.id}>
          <td>{feedback.feeling}</td>
          <td>{feedback.understanding}</td>
          <td>{feedback.support}</td>
          <td>{feedback.comments}</td>
          <td>
            <button onClick={() => this.deleteSubmission(feedback.id)}>
              DELETE
            </button>
          </td>
        </tr>
      );
    });
    return feedbackEntry;
  };

  render() {
    return (
      <div>
        <h2>Submissions</h2>
        <table className="submissions">
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Comprehension</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* Feedback Submissions displayed here */}
          <tbody>{this.createSubmissionList()}</tbody>
        </table>
      </div>
    );
  }
}

export default Start;
