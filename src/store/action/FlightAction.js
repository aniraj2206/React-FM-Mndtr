import { Data } from "./../../DataHub/Data";

export const getFlights = () => {
  return {
    type: "GET_PASSENGERS",
    payLoad: [...Data.flightData]
  };
};

export const updatePassengerList = keyWord => {
  console.log("from payLoad:  " + keyWord);
  return {
    type: "UPDATE_PASSENGERS",
    payLoad: [...Data.flightData]
  };
};
