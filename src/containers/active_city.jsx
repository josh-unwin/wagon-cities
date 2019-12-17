import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';


class ActiveCity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const activeCity = this.props.activeCity;
    return (
      <div className="active-city">
        <h2>{activeCity.name}</h2>
        <p>{activeCity.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.slug}`} alt="" />
      </div>
    )};
}

function mapStateToProps(reduxState) {
  return {
    activeCity: reduxState.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);
