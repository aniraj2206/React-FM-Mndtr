import React from "react";

const Seatlayout = props => {
  const pList = props.passengersList;
  const totalSeats = props.totalSeats;
  const renderSeat = pList.map(passList => {
    return <span className="seatView" />;
  });
  return (
    <div className="passSeatCont">
      <div className="seatCont">{renderSeat}</div>
    </div>
  );
};

export default Seatlayout;
