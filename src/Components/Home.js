import React, { Component } from "react";
import Navbar from "./Home/Navbar";
import Search from "./Home/Search";
export default class Home extends Component {
  render() {
    return (
      <div class="home">
        <Navbar />
        <Search />
      </div>
    );
  }
}
