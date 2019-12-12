import React, { Component } from "react";
import { connect } from "react-redux";
import FlightList from "./../Flightlist/Flightlist";

class AdminComp extends Component {
  render() {
    return (
      <div>
        <div className="flightList">
          <FlightList flightList={this.props.flightData} />
        </div>
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
)(AdminComp);
