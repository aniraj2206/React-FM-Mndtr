import React, { Component } from "react";
import { connect } from "react-redux";
import FlightList from "./../Flightlist/Flightlist";

class AdminComp extends Component {
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
