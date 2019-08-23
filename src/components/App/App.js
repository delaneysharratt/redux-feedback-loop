import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//IMPORTS FROM REACT
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//JSX COMPONENTS
import Start from '../Start/Start'
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
          </header>
          <br />
        </div>
        <Route exact path="/" component={Start} />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} />
        <Route path="/comments" component={Comments} />
      </Router>
    );
  }
}

export default connect()(App);
