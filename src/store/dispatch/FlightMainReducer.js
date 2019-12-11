import Data from "../.././DataHub/Data";

const initialState = Data.flightData;

const flightReducer = (state = initialState, action) => {
  if (action.type === "ADD_PASSENGERS") {
    const sampVar = action.payLoad;
    return [...state, sampVar];
  }
  return state;
};

export default flightReducer;
