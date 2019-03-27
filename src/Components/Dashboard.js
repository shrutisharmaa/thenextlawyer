import React, { Component } from "react";
import Sidebar from "./Dashboard/Sidebar";
import Topbar from "./Dashboard/Topbar";
import { BrowserRouter, Route } from "react-router-dom";
import Services_Container from "./Dashboard/Services_Container";
class Dashboard extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <Topbar name="Aditya Sharma" />
        <Sidebar />
        <BrowserRouter>
          {/* Browser Router can only have one child */}
          <React.Fragment>
            <Route
              exact
              path="/dashboard/services"
              component={Services_Container}
            />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
