import React, { Component } from "react";
import MainStory from "../components/MainStory/MainStory";
import Nav from "../components/Nav/Nav";
import MainAside from "../components/MainAside/MainAside";
import "./Main.scss";

class Main extends Component {
  state = {
    userInfo: [{ comment: "멋진 착륙 좋아요" }],
  };

  render() {
    return (
      <>
        <Nav />
        <main className="main">
          <MainStory userInfo={this.state.userInfo} />
          <MainAside />
        </main>
      </>
    );
  }
}

export default Main;
