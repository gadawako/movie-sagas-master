import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieList extends Component {
  // Renders the entire app on the DOM

  showDescription = (event) => {
    // event.preventDefault();
    // this.props.dispatch
    // this.props.history.push('/detail')
  }

  render(){
  console.log('movie list')
    return (
      <div>
          <h1>gada</h1>
          <ul>
        { this.props.reduxState.movies.map( (movie, index) => 
          <li key={index}>  {movie.id} . {movie.title}
          <img onClick={this.showDescription} src={movie.poster}></img></li>
        )}
      </ul>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(MovieList);