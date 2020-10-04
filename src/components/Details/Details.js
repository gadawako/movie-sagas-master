import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  // Renders the entire app on the DOM

  render() {
    return (
      <div>
          <h1>Details</h1>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(Details);
