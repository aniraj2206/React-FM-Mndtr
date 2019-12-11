import React, { Component } from "react";
import Data from "./../DataHub/Data";
import { connect } from "react-redux";

class AdminComp extends Component {
  showData() {
    console.log(Data);
  }
  render() {
    return (
      <div>
        <p onClick={this.props.addPassengers}> Admin services </p>
      </div>
    );
  }
}

const mapDispatchToProp = dispatch => {
  const payLoad = { name: "Tanu" };
  return {
    addPassengers: () => dispatch({ type: "ADD_PASSENGERS", payLoad })
  };
};

export default connect(
  null,
  mapDispatchToProp
)(AdminComp);
