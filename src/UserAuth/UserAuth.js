import React, { Component } from "react";
import "./UserAuth.scss";

class UserAuth extends Component {
  state = {
    loggedInUT: ''
  };

  doLoginProcess = (e) => {
    this.setState({
      loggedInUT : e.target.id
    });
  }
  
  render() {
    return (
      <div class="loginServices">
        <div class="sampleMsg">Please Select The User Type</div>
        <button onClick={this.doLoginProcess} id="staff" class="staffLogin">
          Staff Login
        </button>
        <button onClick={this.doLoginProcess} id="admin" class="adminLogin">
          Admin Login
        </button>
      </div>
    );
  }
}

export default UserAuth;
