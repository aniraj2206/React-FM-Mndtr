import React, { Component } from "react";

class FlightList extends Component {
  render() {
    const flightList = this.props.flightList;

    return (
      <div>
        {flightList.foreach(flightObj => {
          return <div>{flightObj.flightName}</div>;
        })}
      </div>
    );
  }
}

export default FlightList;
