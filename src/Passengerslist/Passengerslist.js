import React, { Component } from "react";
import { connect } from "react-redux";
import Seatlayout from "./../Seatlayout/Seatlayout";
import "./Passengerslist.scss";

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
          <div className="pName">
            <label>Name</label> : {passengers.name}
          </div>
          <div className="pGender">
            <label>Gender</label> : {passengers.gender}
          </div>
          <div className="pSeat">
            <label>Seat No</label> : {passengers.seatNumber}
          </div>
          <div className="pContact">
            <label>Contact</label> : {passengers.contactNumber}
          </div>
          <div className="pCare">
            <label>Special Care</label> : {passengers.ancillaryServices}
          </div>
          <div className="updateBtn">
            <button className="updateButton">Update</button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Seatlayout
          passengersList={passengersList}
          totalseats={thisFlightData[0].totalSeats}
        />
        <div className="flPassListCont">{passengersDet}</div>
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
