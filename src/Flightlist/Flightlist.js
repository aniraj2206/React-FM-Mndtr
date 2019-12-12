import React from "react";

const FlightList = props => {
  const flightObj = props.flightList;
  const elem = flightObj.map(flights => {
    return <div>{flights.flightName}</div>;
  });
  return <>{elem}</>;
};

export default FlightList;
