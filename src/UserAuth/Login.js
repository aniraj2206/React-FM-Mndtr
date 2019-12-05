import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Login extends Component {
  state = {
    loggedInUT: ""
  };

  doLoginProcess = e => {
    this.setState({
      loggedInUT: e.target.id
    });
    console.log(this.state.loggedInUT);
  };
  render() {
    return (
      <div class="loginServices">
        <div class="sampleMsg">Please Select The User Type</div>
        <button onClick={this.doLoginProcess} id="staff" class="staffLogin">
          <NavLink to="/staffservice">Staff Login</NavLink>
        </button>
        <button onClick={this.doLoginProcess} id="admin" class="adminLogin">
          <NavLink to="/adminservice">Admin Login</NavLink>
        </button>
      </div>
    );
  }
}

export default Login;
