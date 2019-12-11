import React, { Component } from "react";
import Data from "./../Modeldata/Data";

class AdminComp extends Component {
  showData() {
    console.log(Data);
  }
  render() {
    return (
      <div>
        <p onClick={this.showData}> Admin services </p>
      </div>
    );
  }
}

export default AdminComp;
