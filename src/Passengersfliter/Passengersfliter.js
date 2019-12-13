import React from "react";
import "./Passengersfliter.scss";

const Passengersfliter = props => {
  console.log(props.flightDetails);

  const doFilter = filterType => {
    props.filterPessengers(filterType);
  };
  return (
    <div className="filterCont">
      <div className="filterList">
        <label>Filters: </label>
        <span onClick={() => doFilter("CHK_IN")} className="byCheckedIn">
          Checked-In
        </span>
        <span onClick={() => doFilter("NOT_CHK_IN")} className="byNotCheckedIn">
          Not Chacked-In
        </span>
        <span onClick={() => doFilter("WHEEL")} className="byWheelChair">
          Wheel Chair
        </span>
      </div>
    </div>
  );
};

export default Passengersfliter;
