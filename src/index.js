import React from "react";
import ReactDOM from "react-dom";
import Hf from "./Header-footer/Hf";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <Hf typeHF={true}/>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Hf typeHF={false}/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
