import React, { Component } from "react";
import "../Main/Main.scss";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";

class MainKyubin extends Component {
  render() {
    return (
      <div className="Mainkyubin">
        <HeaderComponent />
        <MainComponent />
      </div>
    );
  }
}
export default MainKyubin;
