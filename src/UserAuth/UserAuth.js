import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import StaffComp from "./../StaffComp/StaffComp";
import AdminComp from "./../AdminComp/AdminComp";
import "./UserAuth.scss";

class UserAuth extends Component {
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
      <Router>
        <div class="loginServices">
          <div class="sampleMsg">Please Select The User Type</div>
          <button onClick={this.doLoginProcess} id="staff" class="staffLogin">
            <Link to="/staffservice">Staff Login</Link>
          </button>
          <button onClick={this.doLoginProcess} id="admin" class="adminLogin">
            <Link to="/adminservice">Admin Login</Link>
          </button>
        </div>
        <Switch>
          <Route path="/staffservice" component={StaffComp} />
          <Route path="/adminservice" component={AdminComp} />
        </Switch>
      </Router>
    );
  }
}

export default UserAuth;
