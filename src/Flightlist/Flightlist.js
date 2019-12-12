import React from "react";
import "./Flightlist.scss";

const FlightList = props => {
  const flightObj = props.flightList;

  const showPessangerList = flightNo => {
    props.history.push(`/passenger-list?flightNo=${flightNo}`);
  };

  const elem = flightObj.map(flights => {
    return (
      <div className="flCont">
        <div className="flName">
          {flights.flightNumber} ({flights.flightName})
        </div>
        <div className="flToFrom">
          <div className="flFromSec">
            <span className="fromCaption">From: </span>
            <span className="flFrom">
              {flights.from} ({flights.flightTime.depart})
            </span>
          </div>
          <div className="flToSec">
            <span className="toCaption">To: </span>
            <span className="flFrom">
              {flights.to} ({flights.flightTime.arrival})
            </span>
          </div>
        </div>
        <div className="flPesDet">
          <span className="flAOccSeats">
            Seats: {flights.occupiedSeats} ({flights.totalSeats})
          </span>
        </div>
        <div className="flNavToPessList">
          <button
            onClick={() => showPessangerList(flights.flightNumber)}
            className="flNavToPessBtn"
          >
            Pessenger's List
          </button>
        </div>
      </div>
    );
  });
  return <>{elem}</>;
};

export default FlightList;
