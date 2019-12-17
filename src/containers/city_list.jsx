import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from './city';

import { setCities } from '../actions';

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const cities = this.props.cities;
    const style = { display: 'flex', width: '100%'};

    return (
        <div className="cities">
          <ul>
            {cities.map(city => {
                return (
                  <City city={city} key={city.name} selectCity={this.selectCity} />
                  )
            })}
          </ul>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
