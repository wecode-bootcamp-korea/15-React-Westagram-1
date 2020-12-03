import React, { Component } from "react";
import MainStory from "../components/MainStory/MainStory";
import Nav from "../components/Nav/Nav";
import MainAside from "../components/MainAside/MainAside";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <>
        <Nav />
        <main className="main">
          <MainStory />
          <MainAside />
        </main>
      </>
    );
  }
}

export default Main;
