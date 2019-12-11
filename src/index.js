import React from "react";
import ReactDOM from "react-dom";
import Hf from "./Header-footer/Hf";
import UserAuth from "./UserAuth/UserAuth";

import { createStore } from "redux";
import flightReducer from "./store/dispatch/FlightMainReducer";
import { Provider } from "react-redux";

import "./styles.scss";

const store = createStore(flightReducer);

store.subscribe(() => {
  console.log(store.getState());
});

function App() {
  return (
    <div className="App">
      <Hf typeHF={true} />
      <UserAuth />
      <Hf typeHF={false} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
