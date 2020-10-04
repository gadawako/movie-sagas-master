import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';
import Details from '../Details/Details';

class App extends Component {
  // Renders the entire app on the DOM

  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/edit" component={Edit}/>
          <Route exact path="/details" component={Details}/>
          {/* ADD PAGES! */}
        </Router>
        <p>Empty Page</p>
        <h1>Amir</h1>
      </div>
    );
  }
}

export default App;
