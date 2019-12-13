import React, { Component } from "react";
import { connect } from "react-redux";

class Passengerslist extends Component {
  render() {
    const queryParam = this.props.location.search;
    let flightNumber = queryParam.split("=")[1];

    const flightDetails = this.props.flightData;
    const thisFlightData = [];

    flightDetails.forEach(val => {
      if (val.flightNumber === flightNumber) {
        thisFlightData.push(val);
      }
    });
    console.table(thisFlightData);

    const passengersList = thisFlightData[0].passengers;
    const passengersDet = passengersList.map(passengers => {
      return (
        <div className="flPassList">
          <span>{passengers.name}</span>
        </div>
      );
    });

    return (
      <div>
        <span>{this.passengersDet}</span>
      </div>
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
