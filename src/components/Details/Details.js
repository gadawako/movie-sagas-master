import React, { Component } from 'react';
import {connect} from 'react-redux';

class Details extends Component {
  // Renders the entire app on the DOM
  render() {
    console.log('this.props.reduxState',this.props.reduxState)
    return (
      <div>
          <h1>Details</h1>
          <h2>
            {this.props.reduxState.details.description}
          </h2>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) =>({
    reduxState
})

export default connect(mapStateToProps)(Details);

