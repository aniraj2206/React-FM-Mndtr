import React from "react";
import ReactDOM from "react-dom";
import Hf from "./Header-footer/Hf";
import UserAuth from "./UserAuth/UserAuth";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Hf typeHF={true}/>
      <UserAuth />
      <Hf typeHF={false}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
