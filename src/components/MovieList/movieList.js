import React, { Component } from 'react';
import {connect} from 'react-redux';

function MovieList(props) {
  // Renders the entire app on the DOM
  console.log('movie list', props)
    return (
      <div>
          <h1>gada</h1>
          <ul>
        { props.reduxState.movies.map( (movie, index) => 
          <li key={index}>{movie.title} by {movie.author}</li>  
        )}
      </ul>
      </div>
    );
  }
const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(MovieList);