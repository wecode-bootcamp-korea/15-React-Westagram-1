import React, { Component } from "react";
import MainLeftComponent from "./MainLeftComponent";
import MainRightComponent from "./MainRightComponent";

class MainComponent extends Component {
  render() {
    return (
      <main>
        <MainLeftComponent />
        <MainRightComponent />
      </main>
    );
  }
}

export default MainComponent;
