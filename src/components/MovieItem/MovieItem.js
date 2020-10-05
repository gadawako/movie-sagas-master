import React, { Component } from 'react';
import {connect} from 'react-redux';

class MovieItem extends Component {
  // Renders the entire MovieItem on the DOM

  showDescription = () => {
      console.log('show description')
      this.props.history.push('/detail')
  }
  render() {
    return (
      <div>
        <h2> {this.props.movie.title}</h2>
        <img onClick={this.showDescription} src={this.props.movie.poster}></img>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(MovieItem);