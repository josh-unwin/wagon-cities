import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  }

  render() {
    return (
      <li>
        <div onClick={this.handleClick}>{this.props.city.name}</div>
      </li>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
