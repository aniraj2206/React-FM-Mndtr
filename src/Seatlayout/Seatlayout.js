import React from "react";

const Seatlayout = props => {
  const pList = props.passengersList;
  const totalSeats = props.totalSeats;
  const passSeatNo = [];
  pList.forEach(val => {
    passSeatNo.push(val.seatNumber.split("D")[1]);
  });
  let renderSeat = [];
  for (let i = 1; i <= totalSeats; i++) {
    if (passSeatNo.includes("" + i)) {
      renderSeat.push(<span className="cls_seat alloated">{`D${i}`}</span>);
    } else {
      renderSeat.push(<span className="cls_seat notalloated">{`D${i}`}</span>);
    }
  }

  return (
    <div className="passSeatCont">
      <div className="seatAllocation"> Seat Map:</div>
      <div className="seatCont">{renderSeat}</div>
    </div>
  );
};

export default Seatlayout;
