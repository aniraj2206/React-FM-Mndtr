import React, { Component } from "react";
import { connect } from "react-redux";

class Passengerslist extends Component {
  render() {
    return <></>;
  }
}

const mapStateToProps = state => {
  return {
    flightData: state.flightData
  };
};

const mapDispatchToProp = dispatch => {
  const payLoad = { name: "Tanu" };
  return {
    addPassengers: () => dispatch({ type: "ADD_PASSENGERS", payLoad })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Passengerslist);
