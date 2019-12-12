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

export default connect(mapStateToProps)(AdminComp);
