import React, { Component } from 'react';

class Home extends Component {
  // Renders the entire app on the DOM

  componentDidMount(){
    // our call for getMovies and updateMovies so we can display on DOM
    this.props.dispatch({ type: 'FETCH_MOVIES' });
    
}
  render() {
    return (
      <div>
          <h1>Home</h1>
      </div>
    );
  }
}

export default Home;