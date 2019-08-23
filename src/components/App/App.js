//IMPORTS FROM REACT
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

//STYLING IMPORTS
import './App.css';

//JSX COMPONENTS
import Start from '../Start/Start';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submit from '../Submit/Submit';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
          </header>
          <Route exact path="/" component={Start} />
          <Route path="/feeling" component={Feeling} />
          <Route path="/understanding" component={Understanding} />
          <Route path="/support" component={Support} />
          <Route path="/comments" component={Comments} />
          <Route path="/review" component={Review} />
          <Route path="/submit" component={Submit} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
