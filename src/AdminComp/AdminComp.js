import React, { Component } from "react";
import { connect } from "react-redux";
import FlightList from "./../Flightlist/Flightlist";

import { getFlights } from "./../store/action/FlightAction";

class AdminComp extends Component {
  componentDidMount() {
    this.props.getFlights();
  }
  render() {
    console.log(this.props.history);
    return (
      <div>
        <div className="flightList">
          <FlightList
            flightList={this.props.flightData}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    flightData: state.passengers
  };
};

const mapReducerToProps = dispatch => {
  return {
    getFlights: () => {
      dispatch(getFlights());
    }
  };
};

export default connect(
  mapStateToProps,
  mapReducerToProps
)(AdminComp);
