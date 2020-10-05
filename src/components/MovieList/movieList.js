import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieItem from '../MovieItem/MovieItem'

class MovieList extends Component {
  // Renders the entire movieList on the DOM

  componentDidMount(){
    // our call for getMovies and updateMovies so we can display on DOM
    this.props.dispatch({ type: 'FETCH_MOVIES' });
}
  render(){
  console.log('movie list')
    return (
      <div>
        { this.props.reduxState.movies.map( (movie) => 
        <MovieItem key={movie.id} history={this.props.history}
        movie={movie}/>
        )}

      </div>
    );
  }
}
const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(MovieList);