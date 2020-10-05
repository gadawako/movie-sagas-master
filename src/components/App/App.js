import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import Edit from '../Edit/Edit';
import Details from '../Details/Details';
import MovieList from '../MovieList/movieList';
import {connect} from 'react-redux'

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <MovieList />
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/edit" component={Edit}/>
          <Route exact path="/detail" component={Details}/>
          {/* ADD PAGES! */}
        </Router>
      </div>
    );
  }
}
const reduxStateToProps = (reduxState) =>
 ({ reduxState });

export default connect(reduxStateToProps)(App);