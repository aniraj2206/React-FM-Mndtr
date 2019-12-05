import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StaffComp from "./../StaffComp/StaffComp";
import AdminComp from "./../AdminComp/AdminComp";
import Login from "./Login";
import "./UserAuth.scss";

class UserAuth extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/staffservice" component={StaffComp} />
          <Route path="/adminservice" component={AdminComp} />
        </Switch>
      </Router>
    );
  }
}

export default UserAuth;
