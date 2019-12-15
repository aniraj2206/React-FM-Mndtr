import Data from "../.././DataHub/Data";

const initialState = {
  passengers: [],
  flights: []
};

const flightReducer = (state = initialState, action) => {
  if (action.type === "ADD_PASSENGERS") {
    const sampVar = action.payLoad;
    return {
      ...state,
      passengers: sampVar
    };
  }
  if (action.type === "GET_PASSENGERS") {
    const sampVar = action.payLoad;
    return {
      ...state,
      passengers: sampVar
    };
  }
  return state;
};

export default flightReducer;
