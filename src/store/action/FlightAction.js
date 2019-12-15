import { Data } from "./../../DataHub/Data";

export const getFlights = () => {
  return {
    type: "GET_PASSENGERS",
    payLoad: [...Data.flightData]
  };
};
