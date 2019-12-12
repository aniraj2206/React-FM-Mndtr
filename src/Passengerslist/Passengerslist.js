import React, { Component } from "react";
import { connect } from "react-redux";

class Passengerslist extends Component {
  render() {
    const queryParam = this.props.location.search;
    let flightNumber = queryParam.split("=")[1];
    console.log(flightNumber);
    return (
      <>
        <span>Passanger List Rendred</span>
      </>
    );
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
